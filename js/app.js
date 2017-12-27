"use strict";

(function (w) {
    var app = angular.module('app', ['ui.router', 'oc.lazyLoad']).config(
        ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$httpProvider',
            function ($controllerProvider, $compileProvider,$filterProvider, $provide, $httpProvider) {

                // lazy controller, directive and service
                app.controller = $controllerProvider.register;
                app.directive  = $compileProvider.directive;
                app.filter     = $filterProvider.register;
                app.factory    = $provide.factory;
                app.service    = $provide.service;
                app.constant   = $provide.constant;
                app.value      = $provide.value;

                $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
                $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
            }
        ]);
    w.app = app;
})(window);

