'use strict';

angular.module('app')
  .directive('directive', [ 
    '$location', 
    function ($location) {
        return {
          templateUrl: 'directive.html',
          restrict: 'E',
          scope: {
          },
          link: function postLink(scope) {
          }
        };
  }]);
