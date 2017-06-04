'use strict';

// Define the `app` module
angular.module('app', ['ui.router']);


angular.module('app')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/tab1');

  // Set up UI states
  $stateProvider
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
    templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      item: ['$stateParams', 'ShoppingListService',
            function ($stateParams, ShoppingListService) {
              return ShoppingListService.getItems()
                .then(function (items) {
                  return items[$stateParams.itemId];
                });
            }]
          }
    })
}
