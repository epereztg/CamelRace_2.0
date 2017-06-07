
"use strict";

// Register `graph` component, along with its associated controller and template
angular.
module("app").
component("graph", {
  templateUrl: 'graph/graph.template.html',

  controller: ['$http', 'TasksService', function graphController($http, TasksService) {
    var self = this;
    $http.get('tasks/tasks.json').then(function(response) {
      TasksService.getList()
        .then(function(data) {
          self.data = data;
          self.width = 600;
          self.height = 600;
          self.yAxis = "Ongoing Tasks";
          self.xAxis = "Race!";
          self.max = 0;
          var arrLength = self.data.length;
          self.max = data.reduce((acc, task) => acc >= task.total ? acc : task.total, 0)
        });

    });



  }]
});
