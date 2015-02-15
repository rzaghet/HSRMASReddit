(function () {
    'use strict';
    /* Controllers */
    angular.module('app.accounts', [])
        .controller('Accounts', [
            '$scope', '$modal','$log', function ($scope, $modal, $log) {
                $scope.formInfo = {};
                $scope.showAccountRegisterDialog = openModalAccountRegisterController;
                $scope.saveData = function () {
                    console.log($scope.formInfo);
                    $scope.userNameRequired = '';
                    $scope.password1Required = '';
                    $scope.password2Required = '';


                    if (!$scope.formInfo.userName) {
                        $scope.userNameRequired = 'Name Required';
                    }

                    if (!$scope.formInfo.password1) {
                        $scope.password1Required = 'Password Required';
                    }

                    if (!$scope.formInfo.password2) {
                        $scope.password2Required = 'Retype Password Required';
                    }

                    if ($scope.formInfo.password1 !== $scope.formInfo.password2) {
                        $scope.passwordNotEqual = 'Passwords not equal';
                    }

                    // ToDo: muss später in den dataservice hinein
                    // ToDo: resultat abfangen. 

                    var responsePromise = $.post("http://localhost:4730/register",
                    {
                        name: $scope.formInfo.userName,
                        password: $scope.formInfo.password1
                    });

                    // funktioninert noch nicht
                    responsePromise.success(function (dataFromServer, status, headers, config) {
                        console.log(dataFromServer.data);
                    });
                    responsePromise.error(function (data, status, headers, config) {
                        alert("Submitting form failed!");
                    });

                };



                function openModalAccountRegisterController(size) {
                    var modalInstance = $modal.open({
                        templateUrl: 'accountregister.html',
                        controller: 'ModalAccountRegisterController',
                        size: size
                    });
                    modalInstance.result.then(function (selectedItem) {
                        //$scope.selected = selectedItem;
                    }, function () {
                        $log.info('Modal dismissed at: ' + new Date());
                    });

                };


            }
        ]);

    angular.module('app.accounts').controller('ModalAccountRegisterController', ModalAccountRegisterController);

    ModalAccountRegisterController.$inject = ['$scope', '$modalInstance'];
    function ModalAccountRegisterController($scope, $modalInstance) {
        function initializeScope() {
        };

        initializeScope();

        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            initializeScope();
            $modalInstance.dismiss('cancel');
        };
    }


})();