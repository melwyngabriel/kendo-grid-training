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
  $http.get("http://pc1369:8080/EmployeeManagement/getEmployee")
  .then(function(response) {
    $scope.employee = response.data[$stateParams.emp_id];
    console.log($scope.employee);
  });

  $('.ui.accordion').accordion();
  $('.menu .item').tab();
  // pop-up modal
  var modal = document.getElementById('editEmployeeModal');
  var btn = document.getElementById("editEmployeeButton");
  var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }
    // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  //modal form validation
  $('.ui.form')
    .form({
      fields: {
        name      : {
                    rules: [{
                      type: 'empty'
                      }]
                    },
        project   :  {
                    rules: [{
                      type: 'empty'
                      }]
                    },
        position  :  {
                    rules: [{
                      type: 'empty'
                      }]
                    },
        address   :  {
                    rules: [{
                      type: 'empty'
                      }]
                    },
        contact   : {
                    rules: [{
                      type: 'regExp',
                      value: /^(\+\d{2})\s\((\d{3})\)\s(\d{3})\-(\d{4})$/g,
                      prompt: 'Enter number like Eg: +91 (123) 123-1234'
                      }]
                    }
      }
    });
    $("#contact").kendoMaskedTextBox({
                   mask: "+99 (999) 000-0000"
               });
  //modal submit button disable
               $(function(){
               $('#subBtn').attr('disabled', true);

               $('#resetBtn').on('click', function(){
                   $('#subBtn').attr('disabled',true);
               });
               var lastValue = '';
               $('#detailsForm :input').on('change keyup paste', function(){
                 if ($(this).val() != lastValue) {
                   lastValue = $(this).val();
                   $('#subBtn').removeAttr('disabled',false);
                 }
                 if ($(this).val() = lastValue) {
                   lastValue = $(this).val();
                   $('#subBtn').attr('disabled',true);
                 }
               });
           });
  //modal edit employee submit button
  $scope.editEmployee = function(){
    var empName     = document.getElementById('name').value;
    var empAddress  = document.getElementById('address').value;
    var empContact  = document.getElementById('contact').value;
    var empProject  = document.getElementById('project').value;
    var empPosition = document.getElementById('position').value;
    var empId          = $stateParams.emp_id;
    $http({
          method  : "POST",
          url     : "http://pc1369:8080/EmployeeManagement/updateEmployee",
 		      params  : { name:empName,
                      address:empAddress,
                      contact:empContact,
                      project:empProject,
                      position:empPosition,
                      id:empId
                    }
         }).then(function(response) {
     		    console.log(response);

         }, function(response) {
            console.log(response);
    });

  }
});
