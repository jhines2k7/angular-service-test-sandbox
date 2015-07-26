/**
 * Created by james on 7/26/15.
 */
angular.module('services', [])

    .service('SimpleService', function($window, modalSvc) {
        this.showDialog = function(message, title){
            if(title){
                modalSvc.showModalDialog({
                    title: title,
                    message: message
                });
            } else {
                $window.alert(message);
            }
        };
    });
