describe('NoVowels Filter', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        $filter = $injector.get('$filter');
    }));

    it('should remove the vowels from a given word', function () {
        var results = $filter('removeAllVowels')('education');

        expect(results).toEqual('dctn');
    });
});
