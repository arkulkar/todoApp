/**
 * Created by arkulkar on 3/24/2016.
 */
angular.module('todoapp').controller('todoTaskCntrl',todoList);
function todoList($scope, $http, User){
    $scope.welcome = 'welcome';
    $scope.userName = User.user.name;
    getTodoList();
    $scope.newTask = {};
    $scope.addTodoTask = function(){
        $http.post('/todo/'+$scope.userName,$scope.newTask).then(addedTodoList,error);
    };

    function getTodoList(){
        $http.get('/todo/'+$scope.userName).then(successTodoList,error);
    }
    function addedTodoList(res){
        $scope.success = res.data.message;
        getTodoList();
    }
    function successTodoList(res){
        $scope.todoList = res.data;
    }
    function error(res){
        console.log(res);
        $scope.error = res.data.message;
    }
    $scope.deleteTask = function (task){
        $http.post('/todo/delete/'+$scope.userName, task).then(dataRemoved,error);
    };
    function dataRemoved(res){
        getTodoList();
        $scope.success = res.data.message;
    }

    $scope.markCompleted = function(task){
        $http.post('/todo/completed/'+$scope.userName, task).then(dataMarked,error);
    };
    function dataMarked(res){
        getTodoList();
    }

    $scope.showAll = function(){
        $scope.todoList = getTodoList();
    };

    $scope.showCompleted = function(){
        $http.get('/todo/completed/'+$scope.userName).then(gotCompletedList,error);

    };
    function gotCompletedList(res){
        $scope.todoList = res.data;
    }

}