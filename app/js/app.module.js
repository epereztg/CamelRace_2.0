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
    // .state('items', {
    //                 url: 'items',
    //                 templateUrl: 'Scripts/templates/manageProducts/products.list.html',
    //                 controller: 'productListCtrl'
    //             })
    .state('itemDetail', {
      url: '/item-detail/{itemId}',
      templateUrl: 'bar-detail/item-detail.template.html',
      controller: 'ItemDetailController as itemDetail',
      resolve: {
        item: ['$stateParams', //'TaskService',
          function($stateParams, TaskService) {

            // debugger;
            //console.log(TaskService.list());
            // return TaskService.list()
            //   .then(function(items) {
            //     //return items[$stateParams.itemId];
            //     return TaskService.find($stateParams.itemId);
            //   });

            // TaskService.list(function(countries) {
            //   $scope.countries = countries;
            // });

            //return $stateParams.itemId;
          }
        ]
      }
      //]

    });
}
