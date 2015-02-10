(function () {
    'use strict';

    angular
        .module('app.entries')
        .controller('Entries', Entries);

    //app.$inject = ['$location']; 

    function Entries() {
        /* jshint validthis:true */
        var vm = this;
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

})();
