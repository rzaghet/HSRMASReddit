(function () {
    'use strict';

    angular.module('app', [
        'ngAnimate',
        'ui.bootstrap',
        'ui.bootstrap.modal',
        /*Custom Filters*/
        'customfilters',
         'pascalprecht.translate',
        /*
         * Feature areas
         */
        'blocks.logger',
        'blocks.exception',
        'blocks.router',

        'app.core',
        'app.entries',
        'app.comments',
        'app.accounts'
    ]);
})();