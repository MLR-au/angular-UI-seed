'use strict';

var $controller;

function setup() {
      beforeEach(module('app'));
      beforeEach(inject(function (
        _$controller_
      ) {
          $controller = _$controller_;
          $controller('ComponentCtrl', { 
          });
      }));

}

describe('Controller: ComponentCtrl', function () {

  describe('will test something', function() {
      setup();
      it('should do something', function() {
      });
  });

});
