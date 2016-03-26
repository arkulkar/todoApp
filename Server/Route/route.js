/**
 * Created by arkulkar on 3/22/2016.
 */
var cntrl = require('../Controller/mainController');
module.exports = function(app){
    app.route('/todo/:name')
        .post(cntrl.addTodo)
        .get(cntrl.getTodoList);
    app.route('/todo/completed/:name')
        .post(cntrl.markCompleted)
        .get(cntrl.showCompleted);
    app.route('/todo/delete/:name')
        .post(cntrl.removeTodo);
};

