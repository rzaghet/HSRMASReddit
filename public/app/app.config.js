(function() {
    angular.module('app').config([
        '$translateProvider', function($translateProvider) {

            $translateProvider.translations('en', {
                 'TITLE': 'Hello',
                 'FOO': 'This is a paragraph'
                
            });
            $translateProvider.translations('de', {
                 'TITLE': 'Hallo',
                 'FOO': 'Dies ist ein Paragraph'
            });
            $translateProvider.preferredLanguage('en');
        }
    ]);
})();