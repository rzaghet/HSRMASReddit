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
    };
})();
