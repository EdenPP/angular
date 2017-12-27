"use strict";

app.controller('home-controller', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.content = 'This is home page';
    console.log($rootScope);
}]);
