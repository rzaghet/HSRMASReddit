(function () {
    angular.module('customfilters', []).filter('fromNow', function () {
        return function (date) {
            //todo RZAG: improve window.moment! -> DI
            return window.moment(date).fromNow();
        };
    });

})();