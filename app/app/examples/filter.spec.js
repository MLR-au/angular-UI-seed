'use strict';

describe('Filter: filter', function () {
    var extension;

    beforeEach(module('app'));
    beforeEach(inject(function(_$filter_) {
        extension = _$filter_('filter');
    }));

    it('should do something', function() {
    });

});
