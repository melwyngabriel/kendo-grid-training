'use strict';

/**
 * @ngdoc overview
 * @name sampleProjectApp
 * @description
 * # sampleProjectApp
 *
 * Main module of the application.
 */
angular
  .module('EmployeeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/employees');
    $stateProvider
      .state('employees', {
        url: "/employees",
        reloadOnSearch: false,
        templateUrl: 'views/employee-table.html',
        controller: 'employeeListCtrl',
        controllerAs: 'employeeTable'
      })
      .state('employeeDetails', {
        url: '/:emp_id/Details',
        reloadOnSearch: false,
        templateUrl: 'views/employee-details.html',
        controller: 'employeeDetailsCtrl',
        controllerAs: 'employeeDetails'
      })
  });
