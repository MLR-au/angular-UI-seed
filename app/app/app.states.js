'use strict';

angular
    .module('app.ui.router', [])
    .config([
        '$urlRouterProvider',
        '$stateProvider',
        function($urlRouterProvider, $stateProvider) {

        /*
            // if some state we don't expect specified - go to the root
            $urlRouterProvider.otherwise('/');

            $stateProvider.state('root', {
                url: '/',
                templateUrl: 'app/components/front-page/front-page.html',
                controller: 'FrontPageCtrl'
            });

            $stateProvider.state('explore', {
                url: '/explore',
                templateUrl: 'app/components/explore/explore.html',
                controller: 'ExploreCtrl'
            });
        */
        }
    ]);