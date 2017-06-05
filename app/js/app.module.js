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
    .state('tab1', {
      url: '/tab1',
      templateUrl: '../tab1.html'
    })

    .state('tab2', {
      url: '/tab2',
      templateUrl: '../tab2.html'
    })

    // Premade list page
    .state('mainList', {
      url: '/main-list',
      templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
      controller: 'MainShoppingListController as mainList',
      resolve: {
        items: ['ShoppingListService', function(ShoppingListService) {
          return ShoppingListService.getItems();
        }]
      }
    })

    .state('itemDetail', {
      url: '/item-detail/{itemId}',
      templateUrl: 'bar-detail/item-detail.template.html',
      // template: 'TBD: Detail view for <span>{{$ctrl.itemId}}</span>',
      controller: ['$stateParams',
        function ItemDetailController($stateParams) {
          this.itemId = $stateParams.itemId,
            console.log('state1 params:', $stateParams); //ok
          console.log(this.itemId); //ok

          //$stateParams.itemId;
          // return items[$stateParams.itemId];
          //  this.phoneId = $stateParams.itemId;
        }
      ]
      //   controller: 'ItemDetailController as itemDetail',
      //   resolve: {
      //   item: ['$stateParams', 'ShoppingListService',
      //     function($stateParams, ShoppingListService) {
      //       return ShoppingListService.getItems()
      //         .then(function(items) {
      //           return items[$stateParams.itemId];
      //         });
      // }]

    });
}
