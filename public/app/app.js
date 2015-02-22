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
        vm.showAboutDialog = showAboutDialog;
        vm.dataservice = dataservice;
        vm.fromNow = fromNow;
        vm.noCommentDialogOpen = true;
        vm.entrySettings = { orderBy: '-rating.value' };
        vm.commentSettings = { orderBy: '-rating.value' };

        function fromNow (date) {
            return moment(new Date(date)).fromNow();
        };


        function showAboutDialog(size) {
            var modalInstance = $modal.open({
                templateUrl: 'app/about.html',
                controller: 'ModalAboutController',
                size: size
            });
            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });

        };
    };

    angular.module('app').controller('ModalAboutController', ModalAboutController);

    ModalAboutController.$inject = ['$scope', '$modalInstance'];
    function ModalAboutController($scope, $modalInstance) {
        $scope.ok = function () {
            $modalInstance.close();
        };
    }



    angular.module('app').controller('LangCtrl', Translator);

    Translator.$inject = ['$scope','$translate', '$window'];
    function Translator($scope, $translate, $window) {
        $scope.changeLang = function (key) {
            var vm = this;

            $translate.use(key).then(function (key) {
                if(key === 'de_DE') {
                    $window.moment.locale('de');
                }
                if(key === 'en_US') {
                    $window.moment.locale('en');
                }

                console.log("Sprache zu " + key + " gewechselt.");
            }, function (key) {
                console.log("Irgendwas lief schief.");
            });
        };
    };

}());
