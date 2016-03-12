describe('State1Ctrl', function () {
  var $rootScope,
      $scope,
      controller;
  
  beforeEach(function () {
    module('app', 'ui.router');
    
    inject(function ($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')('State1Ctrl', { $scope: $scope } );
    });
  });
  
  describe('Init', function () {
    it('should be init', function () {
      expect($scope.test).toBeTruthy();
    });
  });
});