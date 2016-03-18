'use strict';

var myApp = angular.module('superApp', [
    'ui.router',
    'templatescache'
]);


myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            url: '/',
            templateUrl: 'app/app.html',
            controller: 'AppController as app'
        });
});


myApp.controller('AppController', function () {
    var vm = this;
    vm.name = 'Angular Developer';

});



