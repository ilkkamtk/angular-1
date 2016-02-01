'use strict';

angular.module('angular1App')
  .controller('MainCtrl', function ($scope, $http) {
    
    $scope.haeKuva = function(){
        var ajax = $http.post('http://users.metropolia.fi/~ilkkamtk/chatApi/login', {
             name: 'Mörkö'
        });
        
        ajax.then(function(response){
            $scope.user = response.data;
            console.log($scope.user);
        });
    };
    
  });
