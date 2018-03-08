'use strict';

/**
 * @ngdoc function
 * @name sampleProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sampleProjectApp
 */
 angular.module('EmployeeApp')
   .controller('employeeTableCtrl',['$scope', '$state', function ($scope, $state) {
    $(document).ready(function () {


      /*   kendo grid  */
        $("#grid").kendoGrid({
            dataSource : {
                type     : "json",
                transport: {
                        read :"./employee_details.json"
                },
                pageSize : 10
            },

            height     : 550,
            groupable  : true,
            sortable   : true,
            selectable : "row",
            change     : onChange,
            pageable   : {
                refresh     : true,
                pageSizes   : true,
                buttonCount : 5
            },
            columns    : [{
                       field:"id",
                       width: 5
            }, {

                       field:"name",
                       width: 20
            }, {
                       field:"project",
                       width: 20
            }, {
                       field:"position",
                       width: 15
            }, {
                       field:"address",
                       width: 30
            }, {
                       field:"contact" ,
                       width:10
            }]
        });


        function onChange() {
            var selectedRows     = this.select();
            var selectedEmployee = this.dataItem(selectedRows);
            $state.go('employeeDetails', {
                 emp_id: selectedEmployee.id
          });
        }
    });
  }]);
