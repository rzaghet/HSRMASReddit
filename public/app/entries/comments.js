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
        alert('test');

        function addNew(comments, newText) {
            alert(newText);
        };
    };
})();
