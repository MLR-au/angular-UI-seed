'use strict';

describe('Directive: directive', function () {
    var $compile, $rootScope, $timeout, element, scope;

    beforeEach(module('app'));
    beforeEach(module('my.templates'));

    beforeEach(inject(function (_$compile_, _$rootScope_, _$timeout_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $timeout = _$timeout_;
        scope = $rootScope.$new();

        element = $compile('<directive></directive>')(scope);
        scope.$digest();
        scope = element.isolateScope();
    }));

    it('should do something', function() {
    });
});
