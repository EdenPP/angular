"use strict";

angular.module('app').config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        debug: false,
        events: false,
        modules: []
    });
}]);