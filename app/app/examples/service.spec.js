'use strict';

var service;

var setup = function() {
  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  beforeEach(inject(function (_service_) {
      service = _service_;
  }));

  afterEach(function() {
  });
};

describe('Service: service will test something', function () {
    setup();
    it('should do something', function() {
    });
});
