describe('favoriteFood Filter', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        $filter = $injector.get('$filter');
    }));

    it('should filter on favorite food correctly', function () {
      var mockedList = [
        {
          name: 'Jason',
          favoriteFood: 'Cheese'
        },
        {
          name: 'Timothy',
          favoriteFood: 'Apples'
        },
        {
          name: 'Matt',
          favoriteFood: 'Parsley'
        }
      ];

      var results = $filter('favoriteFood')(mockedList, 'Cheese');

      expect(results.length).toBe(1);
      expect(results[0].name).toBe('Jason');
    });
});
