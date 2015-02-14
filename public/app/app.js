(function() {
    'use strict';

    angular
        .module('app')
        .controller('App', RedditApp);

    RedditApp.$inject = ['$scope','$modal', '$log'];

    function RedditApp($scope, $modal, $log) {
        var vm = this;
        vm.changeLanguage = changeLanguage;
        vm.showAboutDialog = showAboutDialog;

        function showAboutDialog(size) {
            var modalInstance = $modal.open({
                templateUrl: 'about.html',
                controller: 'ModalAboutController',
                size: size
            });
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });

        };

        function changeLanguage(newLocale) {
            window.moment.lang(newLocale);
            $scope.reload();
        }
    };

    angular.module('app').controller('ModalAboutController', ModalAboutController);

    ModalAboutController.$inject = ['$scope', '$modalInstance'];
    function ModalAboutController($scope, $modalInstance) {
        $scope.ok = function () {
            $modalInstance.close();
        };
    }

}());
