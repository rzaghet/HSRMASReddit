(function () {
    'use strict';

    angular
        .module('app.entries')
        .controller('Entries',Entries);

    Entries.$inject = ['$scope', '$modal', '$log'];


    function Entries($scope, $modal, $log) {
        /* jshint validthis:true */
        var vm = this;

        $scope.items = ['item1', 'item2', 'item3'];

        vm.open = function (size) {
            var modalInstance = $modal.open({
                templateUrl: 'newentry.html',
                controller: 'ModalEntryController',
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });
        };

        vm.entries = [{
            "id": 0,
            "title": "Title",
            "author": "Author",
            "url": "http://www.google.ch",
            "createTime": "2015-01-31T17:32:48.132Z",
            "createTimeDisplay": "Saturday, January 31, 2015 : 18:32:48",
            "rating": {
                "value": 0
            },
            "comments":
            [
                    {
                        "id": 0,
                        "text": "TestComment",
                        "author": "Author",
                        "createTime": "2015-01-31T17:32:48.134Z",
                        "createTimeDisplay": "Saturday, January 31, 2015 : 18:32:48",
                        "rating": {
                            "value": 0
                        },
                        "comments": [
                            {
                                "id": 1,
                                "text": "TestComment1",
                                "author": "xyz",
                                "createTime": "2015-01-31T17:32:48.134Z",
                                "createTimeDisplay": "Saturday, January 31, 2015 : 18:32:48",
                                "rating": {
                                    "value": 0
                                }
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "text": "TestComment1",
                        "author": "xyz",
                        "createTime": "2015-01-31T17:32:48.134Z",
                        "createTimeDisplay": "Saturday, January 31, 2015 : 18:32:48",
                        "rating": {
                            "value": 0
                        }
                    }
            ],
        "voters": []
        }];
        vm.addEntry = addEntry;
        vm.votingEnabled = false;
        vm.title = "test";
        vm.vote = vote;
        vm.showComments = false;

        function vote(item, voteNumber) {
            item.rating.value += voteNumber;
        }

        function addEntry() {

            vm.entries.push({
                "id":
                0,
                 "title":"Title",
                    "author":
                "Author",
                    "url":
                "http://www.google.ch",
                    "createTime":
                "2015-01-31T17:32:48.132Z",
                    "createTimeDisplay":
                "Saturday, January 31, 2015 : 18:32:48",
                    "rating":
                {
                    "value":
                    0
                },
                "comments":
                [
                        {
                            "id": 0,
                            "text": "TestComment",
                            "author": "Author",
                            "createTime": "2015-01-31T17:32:48.134Z",
                            "createTimeDisplay": "Saturday, January 31, 2015 : 18:32:48",
                            "rating": {
                                "value": 0
                            },
                            "comments": []
                        }
                    ],
               "voters":[]
            });
        };

//activate();

        //function activate() {

        //}

    };

    angular.module('app.entries').controller('ModalEntryController', ModalEntryController);

    ModalEntryController.$inject = ['$scope', '$modalInstance', ''];
    function ModalEntryController($scope, $modalInstance, items) {

        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }


})();
