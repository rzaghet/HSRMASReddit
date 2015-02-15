(function () {
    'use strict';

    angular
        .module('app.entries')
        .controller('Entries',Entries);

    Entries.$inject = ['$scope', '$modal', '$log', 'dataservice'];

    function Entries($scope, $modal, $log, dataservice) {
        /* jshint validthis:true */
        var vm = this;

        dataservice.getEntries().then(function (entriesResult) { vm.entries = entriesResult; });

        //vm.entries = [{
        //    "id": 0,
        //    "title": "Title",
        //    "author": "Author",
        //    "url": "http://www.google.ch",
        //    "createTime": "2015-01-31T17:32:48.132Z",
        //    "createTimeDisplay": "Saturday, January 31, 2015 : 18:32:48",
        //    "rating": {
        //        "value": 0
        //    },
        //    "comments":
        //    [
        //            {
        //                "id": 0,
        //                "text": "TestComment",
        //                "author": "Author",
        //                "createTime": "2015-01-31T17:32:48.134Z",
        //                "createTimeDisplay": "Saturday, January 31, 2015 : 18:32:48",
        //                "rating": {
        //                    "value": 0
        //                },
        //                "comments": [
        //                    {
        //                        "id": 1,
        //                        "text": "TestComment1",
        //                        "author": "xyz",
        //                        "createTime": "2015-01-31T17:32:48.134Z",
        //                        "createTimeDisplay": "Saturday, January 31, 2015 : 18:32:48",
        //                        "rating": {
        //                            "value": 0
        //                        }
        //                    }
        //                ]
        //            },
        //            {
        //                "id": 1,
        //                "text": "TestComment1",
        //                "author": "xyz",
        //                "createTime": "2015-01-31T17:32:48.134Z",
        //                "createTimeDisplay": "Saturday, January 31, 2015 : 18:32:48",
        //                "rating": {
        //                    "value": 0
        //                }
        //            }
        //    ],
        //"voters": []
        //}];

        vm.open = openModalEntryController;
        vm.addEntry = addEntry;
        vm.votingEnabled = false;
        vm.title = "test";
        vm.vote = vote;
        vm.showComments = false;
        
        function openModalEntryController (size) {
                var modalInstance = $modal.open({
                    templateUrl: 'newentry.html',
                    controller: 'ModalEntryController',
                    size: size,
                    resolve: {
                        addEntry: function () {
                            return vm.addEntry;
                        }
                    }
                });
                modalInstance.result.then(function (selectedItem) {
                    $scope.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });

            };
        
        function vote(item, voteNumber) {
            item.rating.value += voteNumber;
        };

        function addEntry(newEntry) {
            vm.entries.push(newEntry);
        }

        //function addEntry() {

        //    vm.entries.push({
        //        "id":
        //        0,
        //         "title":"Title",
        //            "author":
        //        "Author",
        //            "url":
        //        "http://www.google.ch",
        //            "createTime":
        //        "2015-01-31T17:32:48.132Z",
        //            "createTimeDisplay":
        //        "Saturday, January 31, 2015 : 18:32:48",
        //            "rating":
        //        {
        //            "value":
        //            0
        //        },
        //        "comments":
        //        [
        //                {
        //                    "id": 0,
        //                    "text": "TestComment",
        //                    "author": "Author",
        //                    "createTime": "2015-01-31T17:32:48.134Z",
        //                    "createTimeDisplay": "Saturday, January 31, 2015 : 18:32:48",
        //                    "rating": {
        //                        "value": 0
        //                    },
        //                    "comments": []
        //                }
        //            ],
        //       "voters":[]
        //    });
        //};

//activate();

        //function activate() {

        //}

    };

    angular.module('app.entries').controller('ModalEntryController', ModalEntryController);

    ModalEntryController.$inject = ['$scope', '$modalInstance', 'addEntry'];
    function ModalEntryController($scope, $modalInstance, addEntry) {
        function initializeScope() {
            $scope.entryTitle = "";
            $scope.entryUrl = "";
        };

        initializeScope();
        
        //$scope.items = items;

        $scope.ok = function () {
            addEntry({ title: $scope.entryTitle, url: $scope.entryUrl, createTime: Date.now, author:'authenticated user', rating: {value:0} });
            $modalInstance.close();
        };

        $scope.cancel = function () {
            initializeScope();
            $modalInstance.dismiss('cancel');
        };
    }


})();
