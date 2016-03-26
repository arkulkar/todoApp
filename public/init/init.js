/**
 * Created by arkulkar on 3/26/2016.
 */
angular.module('todoapp').run(init);
function init(User, $cookieStore, $uibModal) {
    var user = $cookieStore.get('todoUser');
    if (angular.equals({}, user) || user === undefined || user.name === "") {
        $uibModal.open({
            templateUrl: '../view/checkIn.html',
            backdrop : 'static',
            controller: 'userModal'
        });
    } else{
        User.user = user;
    }

}

