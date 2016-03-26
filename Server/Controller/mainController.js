/**
 * Created by arkulkar on 3/22/2016.
 */
var fs = require('fs');
module.exports = {
    getTodoList : getTodoList,
    addTodo : addTodo,
    removeTodo : removeTodo,
    markCompleted : markCompleted,
    showCompleted :  showCompleted,
    init : init
};
var todoList = [];
function getTodoList(req,res){
    var param = req.params;
    var user = param.name;
    var specificTodoList = [];
    for (var i = 0; i < todoList.length; i++){
        if (user === todoList[i].name){
            specificTodoList.push(todoList[i]);
        }
    }
    res.json(specificTodoList);
}
function addTodo(req, res){
    var body = req.body;
    if (body.title === undefined || body.dueTime === undefined){
        res.status(500).json({message : 'invalid task'});
    }else {
        var dueDate = new Date(body.dueTime);
        var todoObj = {
            name: req.params.name,
            title: body.title,
            dueTime: dueDate,
            isComplete: false
        };
        todoList.push(todoObj);
        res.json({message : 'added successfully ' , task : todoObj});
    }
}

function removeTodo(req, res){
    var todo = req.body;
    var index = findIndex(todo);
    if (index === -1){
        res.status(500).json({message : 'task not found'});
    } else {
        todoList.splice(index,1);
        res.json({message : 'deleted successfully', todoTask : todo});
    }

}

function markCompleted(req, res){
    var todo = req.body;
    var index = findIndex(todo);
    if (index === -1){
        res.status(500).json({message : 'task not found'});
    } else {
        todo.isComplete = true;
        todoList.splice(index, 1);
        todoList.push(todo);
        res.json(todo);
    }
}

function showCompleted(req,res){
    var userName = req.params.name;
    var compltedList = [];
    for (var i = 0; i < todoList.length; i++){
        if (todoList[i].name === userName && todoList[i].isComplete === true){
            compltedList.push(todoList[i]);
        }
    }
    res.json(compltedList);
}

function findIndex (todoTask){
    var index = -1;
    console.log(todoTask);
    var taskDate = new Date(todoTask.dueTime);
    for (var i = 0; i < todoList.length; i++){
        var isDateEqual = new Date(todoList[i].dueTime).getDate() === taskDate.getDate();
        if (todoList[i].title === todoTask.title &&
            todoList[i].name === todoTask.name &&
            isDateEqual){
             index = i ;
        }
    }
    return index;
}

//so the program will not close instantly
process.stdin.resume();
function exitHandler(err) {
    console.log("I am here");
    var list = JSON.stringify(todoList);
    console.log(list);
    fs.writeFile(__dirname+'/persist.data', list, function(err) {
        process.exit();
    });
}
//process.on('exit', exitHandler.bind(null));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind());

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind());

function init() {
    var buf = fs.readFileSync(__dirname + '/persist.data');
    if (null !== buf) {
        var content = buf.toString();
        var list = JSON.parse(content);
        for(var i =0 ; i < list.length ; i++) {
            todoList.push(list[i]);
        }
    }
}