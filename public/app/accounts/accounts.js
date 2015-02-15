﻿(function () {
    'use strict';
    /* Controllers */
    angular.module('app.accounts', [])
        .controller('Accounts', Accounts);

    Accounts.$inject = ['$scope', '$modal', '$log', 'dataservice'];

    function Accounts($scope, $modal, $log, dataservice) {
        var vm = this;
        vm.formInfo = {};
        vm.showAccountRegisterDialog = openModalAccountRegisterController;
        vm.registerUser = registerUser;
        vm.showLoginDialog = openModalLoginController;
        vm.password = '';
        vm.userName = '';
        vm.login = login;
        vm.logoutUser = logoutUser;

        function logoutUser() {
            return dataservice.logout()
                    .then(function (logoutSuccess) {
                        var promise = this;
                        if (logoutSuccess) {
                            dataservice.logoutUser();
                        }
                        return promise;
                    });
        };

        function login() {
            var user = {
                name: vm.userName,
                password: vm.password
            };
            return dataservice.authenticate(user)
                    .then(function (loginSuccess) {
                        var promise = this;
                        if (loginSuccess) {
                            dataservice.authenticateUser(user.name);
                        }
                return promise;
            });
        };

        


        function registerUser() {
            console.log(vm.formInfo);
            vm.userNameRequired = '';
            vm.password1Required = '';
            vm.password2Required = '';


            if (!vm.formInfo.userName) {
                vm.userNameRequired = 'Name Required';
            }

            if (!vm.formInfo.password1) {
                vm.password1Required = 'Password Required';
            }

            if (!vm.formInfo.password2) {
                vm.password2Required = 'Retype Password Required';
            }

            if (vm.formInfo.password1 !== vm.formInfo.password2) {
                vm.passwordNotEqual = 'Passwords not equal';
            }

            // ToDo: muss später in den dataservice hinein
            // ToDo: resultat abfangen. 

            var responsePromise = $.post("http://localhost:4730/register",
            {
                name: vm.formInfo.userName,
                password: vm.formInfo.password1
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
                //resolve: {
                //    registerUser: function () {
                //        return vm.registerUser;
                //    }
                //}
            });
            //modalInstance.result.then(function (selectedItem) {
            //    //vm.selected = selectedItem;
            //}, function () {
            //    $log.info('Modal dismissed at: ' + new Date());
            //});

        };

        function openModalLoginController(size) {
            var modalInstance = $modal.open({
                templateUrl: 'login.html',
                controller: 'ModalLoginController',
                size: size
                //resolve: {
                //    registerUser: function () {
                //        return vm.registerUser;
                //    }
                //}
            });
            //modalInstance.result.then(function (selectedItem) {
            //    //vm.selected = selectedItem;
            //}, function () {
            //    $log.info('Modal dismissed at: ' + new Date());
            //});

        };
    };


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
    };

    angular.module('app.accounts').controller('ModalLoginController', ModalLoginController);

    ModalLoginController.$inject = ['$scope', '$modalInstance'];
    function ModalLoginController($scope, $modalInstance) {
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
    };

})();