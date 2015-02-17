(function () {
    'use strict';

    angular
        .module('app.comments')
        .controller('Comments', Comments);

    //app.$inject = ['$location']; 
    Comments.$inject = ['$scope', '$modal', '$log', 'dataservice'];

    function Comments($scope, $modal, $log, dataservice) {
        /* jshint validthis:true */
        var vm = this;
        vm.showComments = false;
        vm.addNew = addNew;
        vm.newComment = '';

        function addNew(comment, parentId, typeString) {
            comment.comments = comment.comments || [];

            var updateComments = function(newCommentResult) {
                console.log(newCommentResult);
                vm.newComment = '';
                comment.comments.push(newCommentResult);
            };

            if (typeString === 'entry') {
                return dataservice.newEntryComment(parentId, {text: vm.newComment})
                    .then(function(newCommentResult) {
                        var promise = this;
                        updateComments(newCommentResult);
                        return promise;
                    });
            } else {
                return dataservice.newCommentComment(parentId, { text: vm.newComment })
                    .then(function(newCommentResult) {
                        var promise = this;
                        updateComments(newCommentResult);
                        return promise;
                    });
            }


            //comment.comments.push({
                //    "id": 1,
                //    "text": vm.newComment,
                //    "author": "xyz",
                //    "createTime": Date.now,
                //    "createTimeDisplay": "Saturday, January 31, 2015 : 18:32:48",
                //    "rating": {
                //        "value": 0
                //    }
                //});


            };
    };
})();
