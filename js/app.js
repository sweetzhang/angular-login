var app = angular.module('app', ['ui.router','ngRoute']);
app.config(function($stateProvider, $urlRouterProvider,$routeProvider) {
    $routeProvider.when('/login', {
            templateUrl: './pages/login.html',
            controller: 'loginCtrl'
        })
        .when('/guide/:name/:email/:city', {
            templateUrl: 'pages/guide.html',
            controller:'guideCtrl'
        });
    $routeProvider.otherwise({redirectTo: '/login'});

});
