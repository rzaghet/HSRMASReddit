(function() {
    'use strict';

    angular
        .module('app.entries')
        .run(appRun);

    // appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/entries',
                config: {
                    templateUrl: 'app/entries/entries.html',
                    controller: 'Entries',
                    controllerAs: 'vm',
                    title: 'entries'
                    //,settings: {
                    //    nav: 2,
                    //    content: '<i class="fa fa-lock"></i> Avengers'
                    //}
                }
            }
        ];
    }
})();
