(function () {
    'use strict';

    angular
        .module('app.comments')
        .controller('Comments', Comments);

    //app.$inject = ['$location']; 

    function Comments() {
        /* jshint validthis:true */
        var vm = this;
        vm.showComments = false;
        vm.addNew = addNew;
        vm.newComment = '';

        function addNew(comments) {
            comments.push({
                "id": 1,
                "text": vm.newComment,
                "author": "xyz",
                "createTime": "2015-01-31T17:32:48.134Z",
                "createTimeDisplay": "Saturday, January 31, 2015 : 18:32:48",
                "rating": {
                    "value": 0
                }
            });
            vm.newComment = '';
        };
    };
})();
