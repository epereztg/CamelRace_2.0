'use strict';

// Define the `app` module
angular.module('app', ['ui.router']);


angular.module('app')
  .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/home.template.html'
    })


    .state('tab1', {
      url: '/tab1',
      templateUrl: '../tab1.html'
    })

    .state('tab2', {
      url: '/tab2',
      templateUrl: '../tab2.html'
    })

    .state('itemDetail', {
      url: '/item-detail/{itemId}',
      templateUrl: 'bar-detail/item-detail.template.html',
      controller: 'ItemDetailController as itemDetail',
      resolve: {
        item: ['$stateParams', 'TasksService',
          function($stateParams, TasksService) {
            var items;
            //show output with json file: it does not work!!https://carlosazaustre.es/blog/uso-de-promesas-en-angularjs/

            //return TasksService.findIntrueJson($stateParams.itemId);
            return TasksService.findInfakeJson($stateParams.itemId);
          }
        ]
      }
    })

  ;
}
