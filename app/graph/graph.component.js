﻿
"use strict";

// Register `graph` component, along with its associated controller and template
angular.
module("app").
component("graph", {
  bindings: {
    width: '=',
    height: '=',
    yAxis: '=',
    xAxis: '='
  },

  templateUrl: 'graph/graph.template.html',

  controller: ['$http', 'TasksService', function graphController($http, TasksService) {
    var self = this;
    $http.get('tasks/tasks.json').then(function(response) {
      TasksService.getList()
        .then(function(data) {
          self.data = data;
          // self.width = 600;
          // self.height = 600;
          // self.yAxis = "Ongoing Tasks";
          // self.xAxis = "Race!";
          self.max = 0;
          var arrLength = self.data.length;

          // "Arrow functions" are not supported by PhantomJS 2.x
          // PhantomJS only supports a small subset of ES6.
          // https://stackoverflow.com/questions/39026881/unexpected-token-using-array-some-with-karma-and-phantomjs
          // self.max = data.reduce((acc, task) => acc >= task.total ? acc : task.total, 0)
          var arrLength = self.data.length;
          for (var i = 0; i < arrLength; i++) {
            // Find Maximum X Axis Value
            if (self.data[i].total > self.max)
              self.max = self.data[i].total;
          }
        });

    });



  }]
});
