'use strict';

angular.module('app')
  .filter('filter', function () {
    return function (input) {
        return input;
    };
  });
