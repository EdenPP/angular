"use strict";

app.controller('product-controller', ['$scope', '$location', function ($scope, $location) {
    $scope.content = 'This is home page';
    console.log($location.search().id);
}]);
