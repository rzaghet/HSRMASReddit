﻿(function () {
    'use strict';

    angular
        .module('app.entries')
        .controller('Entries',Entries);

    Entries.$inject = ['$scope', '$modal', '$log', 'dataservice'];

    function Entries($scope, $modal, $log, dataservice) {
        /* jshint validthis:true */
        var vm = this;

        dataservice.getEntries().then(function (entriesResult) { vm.entries = entriesResult});
        
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
        //vm.votingEnabled = false;
        vm.title = "test";
        vm.voteEntry = voteEntry;
        vm.voteComment = voteComment;
        vm.showComments = false;
        
        function openModalEntryController (size) {
                var modalInstance = $modal.open({
                    templateUrl: 'newentry.html',
                    controllerAs: '',
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
        
        function voteEntry(item, voteNumber) {
            if (voteNumber === 1) {
                dataservice.likeEntry(item.id).then(function (voteCountResult) {
                    item.rating.value = voteCountResult;
                });
            }
            if (voteNumber === -1) {
                dataservice.dislikeEntry(item.id).then(function (voteCountResult) {
                    item.rating.value = voteCountResult;
                });
            }

            //;
            //item.rating.value += voteNumber;
        };

        function voteComment(item, voteNumber) {
            if (voteNumber === 1) {
                dataservice.likeComment(item.id).then(function (voteCountResult) {
                    item.rating.value = voteCountResult;
                });
            }

            if (voteNumber === -1) {
                dataservice.dislikeComment(item.id).then(function (voteCountResult) {
                    item.rating.value = voteCountResult;
                });
            }
            //item.rating.value += voteNumber;
        };

        function addEntry(newEntry) {
            return dataservice.newEntry(newEntry)
                .then(function(newEntryResult) {
                    var promise = this;
                console.log(newEntryResult);
                    vm.entries.push(newEntryResult);
                    return promise;
                });
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
        var vmNewEntry = $scope;

        function initializeScope() {
            vmNewEntry.entryTitle = "";
            vmNewEntry.entryUrl = "";
        };

        initializeScope();
        
        //$scope.items = items;

        $scope.ok = function () {
            console.log($scope);
            console.log($scope.entryTitle);
            console.log($scope.entryUrl);
            addEntry({ title: vmNewEntry.entryTitle, url: vmNewEntry.entryUrl, createTime: Date.now, rating: { value: 0 } });
            $modalInstance.close();
        };

        $scope.cancel = function () {
            initializeScope();
            $modalInstance.dismiss('cancel');
        };
    }


})();
