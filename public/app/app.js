(function() {
    'use strict';

    angular
        .module('app')
        .controller('App', RedditApp);

    RedditApp.$inject = ['$scope'];

    function RedditApp($scope) {
        var vm = this;
        vm.changeLanguage = changeLanguage;

        function changeLanguage(newLocale) {
            window.moment.lang(newLocale);
            $scope.reload();
        }
    }
}());
