
"use strict";

// Register `barList` component, along with its associated controller and template
angular.
module("app").
component("barList", {
  bindings: {
    width: '=',
    height: '=',
    max: '='
  },
  templateUrl: 'bar-list/bar-list.template.html',
  controller: ['$http', function barListController($http) {
    var self = this;
    self.image = '../images/walkingCamel.gif';
    $http.get('tasks/tasks.json').then(function(response) {
      self.data = response.data;
      self.items = response.data;
    }); //htttpget

    // self.isActive = false;
    // self.activeButton = function() {
    //   self.isActive = !self.isActive;
    // }
  }] // Ctrl
});
