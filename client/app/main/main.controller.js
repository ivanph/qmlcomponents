'use strict';

angular.module('qmlcomponentsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.components = [];

    $http.get('/api/components').success(function(components) {
      $scope.components = components;
    });

    $scope.addComponent = function() {
      if($scope.newComponent === '') {
        return;
      }
      $http.post('/api/components', { name: $scope.newComponent });
      $scope.newComponent = '';
    };

    $scope.deleteComponent = function(component) {
      $http.delete('/api/components/' + component._id);
    };
  });
