(function() {
    'use strict';

    angular
        .module('app')
        .controller('App', RedditApp);

    RedditApp.$inject = ['$scope','$modal', '$log', 'dataservice'];

    function RedditApp($scope, $modal, $log, dataservice) {
        //alert(dataservice.getUsers());
        //alert(dataservice.registerUser({name:'abc1', password:'abc1'}));
        var vm = this;
        vm.changeLanguage = changeLanguage;
        vm.showAboutDialog = showAboutDialog;
        vm.dataservice = dataservice;

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
            window.moment.locale(newLocale);
            //$scope.reload();
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
