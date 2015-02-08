(function () {
    'use strict';

    angular.module('app', [
        //'app.core',

        /*Custom Filters*/
        'customfilters',
         'pascalprecht.translate',
        /*
         * Feature areas
         */
        'app.entities'
    ]);
})();