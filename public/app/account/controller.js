

/// <reference path="C:\Users\Robin\Documents\GitHub\HSRMASReddit\public\Scripts/angular.js" />
/// <reference path="C:\Users\Robin\Documents\GitHub\HSRMASReddit\public\Scripts/angular.min.js" />

'use strict';

/* Controllers */

angular.module('reddit', [])
  .controller('Register', ['$scope', function ($scope) {
      $scope.formInfo = {};
      $scope.saveData = function () {
          console.log($scope.formInfo);
          $scope.userNameRequired = '';
          $scope.password1Required = '';
          $scope.password2Required = '';

          if (!$scope.formInfo.userName) {
              $scope.userNameRequired = 'Name Required';
          }

          if (!$scope.formInfo.password1) {
              $scope.password1Required = 'Password Required';
          }

          if (!$scope.formInfo.password2) {
              $scope.password2Required = 'Retype Password Required';
          }

          if ($scope.formInfo.password1 !== $scope.formInfo.password2) {
              $scope.passwordNotEqual = 'Passwords not equal';
          }

          // ToDo: muss später in den dataservice hinein
          // ToDo: resultat abfangen. 

          var responsePromise = $.post("http://localhost:4730/register",
               {
                   name: $scope.formInfo.userName,
                   password: $scope.formInfo.password1
               });

          // funktioninert noch nicht
          responsePromise.success(function (dataFromServer, status, headers, config) {
              console.log(dataFromServer.data);
          });
          responsePromise.error(function (data, status, headers, config) {
              alert("Submitting form failed!");
          });
          
      }
  }]);
