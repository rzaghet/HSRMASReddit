(function (moment) {
    angular.module('customfilters', []).filter('fromNow', function () {
        return function (date) {
            //todo RZAG: improve window.moment! -> DI
            return moment(new Date(date)).fromNow();
        };
    });

})(window.moment);