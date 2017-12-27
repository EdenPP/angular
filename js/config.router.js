"use strict";

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'tpl/home.html',
            controller: 'home-controller',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'js/controllers/home.js'
                    ]);
                }]
            }
        })
        .state('product', {
            url: '/product',
            templateUrl: 'tpl/product.html',
            controller: 'product-controller',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'css/product.css',
                        'js/controllers/product.js'
                    ])
                }]
            }
        });
    
}]);