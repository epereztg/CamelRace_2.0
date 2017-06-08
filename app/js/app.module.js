'use strict';

// Define the `app` module
//angular.module('app', ['ui.router']);


angular.module('app', [
    'ui.router',
    'core.components',
    'core.services'
  ])
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

    .state('itemDetail', {
      url: '/item-detail/{itemId}',
      templateUrl: 'bar-detail/item-detail.template.html',
      controller: 'ItemDetailController as itemDetail',
      resolve: {
        item: ['$stateParams', 'TasksService',
          function($stateParams, TasksService) {
            var items;
            return TasksService.getList()
              .then(function(items) {
                return items[$stateParams.itemId];
              });
          }
        ]
      }
    })

  ;
}
