/**
 * Created by arkulkar on 3/26/2016.
 */
angular.module('todoapp').controller('userModal',userModal);
function userModal($scope, User, $cookieStore, $uibModalInstance, $location, $window){
    $scope.user = {};
    User.user = $scope.user;
    $scope.submit = function(){
        $cookieStore.put('todoUser',User.user);
        $uibModalInstance.close();
        $location.path('/');
        $window.location.reload();
    }
}