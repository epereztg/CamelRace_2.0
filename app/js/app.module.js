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
            //var aux = TaskService.list();
            // debugger;
            // console.log('$stateParams.itemId: ' + $stateParams.itemId);
            // console.log('fakeJson().length: ' + TasksService.fakeJson().length);
            // console.log(TasksService.fakeJson()[0].label);
            // console.log(TasksService.fakeJson()[1].label);
            //return TasksService.fakeJson()[$stateParams.itemId].label;

            console.log(TasksService.findInfakeJson($stateParams.itemId).label);
            return TasksService.findInfakeJson($stateParams.itemId);
            //return TasksService.find($stateParams.itemId);

          }
        ]
      }
      // item: [function(TasksService, $stateParams) {
      //   return TaskService.find($stateParams.id);
      // }]

      //]

    });
}
