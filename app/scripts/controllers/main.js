'use strict';

/**
 * @ngdoc function
 * @name demoProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoProjectApp
 */
angular.module('demoProjectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
