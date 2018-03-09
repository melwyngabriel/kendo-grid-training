'use strict';

/**
 * @ngdoc function
 * @name sampleProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sampleProjectApp
 */
 angular.module('EmployeeApp')
   .controller('employeeDetailsCtrl', function ($scope, $stateParams,$http) {


       $http.get("./employee_details.json")
         .then(function(response) {
             $scope.employee = response.data[$stateParams.emp_id];
             console.log($scope.employee);
         });

         $('.ui.accordion').accordion();
         $('.menu .item').tab();
});
