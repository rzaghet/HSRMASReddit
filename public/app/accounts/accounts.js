(function () {
    'use strict';
    /* Controllers */
    angular.module('app.accounts', [])
        .controller('Accounts', Accounts);

    Accounts.$inject = ['$scope', '$modal', '$log', 'dataservice', '$q'];

    function Accounts($scope, $modal, $log, dataservice, $q) {
        var vm = this;
        vm.formInfo = {};
        vm.showAccountRegisterDialog = openModalAccountRegisterController;
        vm.registerUser = registerUser;
        vm.showLoginDialog = openModalLoginController;
        vm.password = '';
        vm.userName = '';
        vm.formInfo.userName = '';
        vm.formInfo.password1 = '';
        vm.formInfo.password2 = '';
        vm.login = login;
        vm.logoutUser = logoutUser;
        vm.findUser = findUser;
        vm.UserExist = false;
        vm.loginFailed = false;

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

        function login(successFunction) {
            var user = {
                name: vm.userName,
                password: vm.password
            };
            return dataservice.authenticate(user)
                    .then(function (loginSuccess) {
                        //var promise = this;
                        vm.loginFailed = !loginSuccess;
                        if (loginSuccess) {
                            dataservice.authenticateUser(user.name);
                            successFunction();
                        }
                    });
        };

        function findUser() {
            return dataservice.getUsers()
                    .then(function (getUsersSuccess) {
                        var promise = this;
                        if (getUsersSuccess) {
                            console.info(getUsersSuccess);
                            for (var i in getUsersSuccess) {
                                if (getUsersSuccess[i].name === vm.formInfo.userName) {
                                    console.info("Name already exist");
                                    vm.UserExist = true;
                                    return;
                                }
                                vm.UserExist = false;
                            }
                        }

                    });
        };


        function registerUser() {
            console.log(vm.formInfo);

            var registerUser = {
                name: vm.formInfo.userName,
                password: vm.formInfo.password1
            };

            return dataservice.registerUser(registerUser)
                .then(function (registerSuccess) {
                    var promise = this;
                    if (registerSuccess) {
                        vm.userName = vm.formInfo.userName;
                        vm.password = vm.formInfo.password1;
                        login();
                    }

                });
        };


        function openModalAccountRegisterController(size) {
            var modalInstance = $modal.open({
                templateUrl: 'app/accounts/accountregister.html',
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
                templateUrl: 'app/accounts/login.html',
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