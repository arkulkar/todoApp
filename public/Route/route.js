/**
 * Created by arkulkar on 3/24/2016.
 */
angular.module('todoapp')
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider.state('todoTask', {
            url: "/",
            templateUrl: "../view/todoTask.html"
        })
    });