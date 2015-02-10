(function() {
    angular.module('app').config([
        '$translateProvider', function($translateProvider) {

            $translateProvider.translations('en', {
                'TITLE': 'The Hauser/Mahr/Zaghet Reddit-Clone',
                'AUTHOR': 'Author',
                'BY': 'by',
                'SUBMITTED': 'Submitted'
                
            });
            $translateProvider.translations('de', {
                'TITLE': 'Der Hauser/Mahr/Zaghet Reddit-Klon',
                'AUTHOR': 'Autor',
                'BY': 'von',
                'SUBMITTED': 'Übertragen'

            });
            $translateProvider.preferredLanguage('en');
        }
    ]);
})();