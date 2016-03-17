'use strict';

var myApp = angular.module('superApp', [
    'ngNewRouter',
    'templatescache'
]);

myApp.config(['$componentLoaderProvider', function ($componentLoaderProvider) {

    $componentLoaderProvider.setTemplateMapping(function (name) {

        // app we want to keep in the root as base place holder
        if (name === 'app') {
            return 'app/'+ name + '.html';
        } else if (name.toLowerCase().indexOf('layout') > 0) {
            return 'common/layout/' + name + '/' + name + '.html';
        }
        return 'common/components/' + name + '/' + name + '.html';
    });
}]);

myApp.controller('AppController', function ($router) {
    var vm = this;
    vm.name = 'Angular Developer';


    /**
     * Routing configuration
     */
    $router.config([
        { path:'/', component:'app' }
    ]);
});



