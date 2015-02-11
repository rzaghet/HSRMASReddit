(function () {
    'use strict';

    angular.module('app', [
        //'app.core',
        'ui.bootstrap.modal',
        /*Custom Filters*/
        'customfilters',
         'pascalprecht.translate',
        /*
         * Feature areas
         */
        'app.entries',
        'app.comments'
    ]);
})();