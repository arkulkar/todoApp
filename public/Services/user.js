/**
 * Created by arkulkar on 3/26/2016.
 */
angular.module('todoapp').factory('User',[
    function() {
        var _this = this;

        _this._data = {
            user : window.user
        };


        return _this._data;
    }
]);