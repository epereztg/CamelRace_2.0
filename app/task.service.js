var app = angular.module('app');

// app.factory('TasksService', ['ui.router'], function($http) {
app.factory('TasksService', function($http) {
  //Example to test: $http.get('https://api.github.com/users/angular/repos');
  return {

    fakeArray: function() {
      return ['hat', 'book', 'pen'];
    },
    fakeJson: function() {
      var jsnFile = [{
          "label": "Task1",
          "total": 70,
          "current": 20,
        },
        {
          "label": "Task2",
          "total": 94,
          "current": 10,
        },
      ];
      return jsnFile;
    },
    findInfakeJson: function(id) {
      return this.fakeJson()[id];
    },

    trueJson: function() {
      // var jsonFile = null;
      // $http.get('tasks/tasks.json').then(function(response) {
      //   jsonFile = response;
      // });
      // return jsonFile;
      //$http.get('https://gist.githubusercontent.com/idhamperdameian/239cc5a4dbba4488575d/raw/0a2ea4c6c120c9a8f02c85afcf7a31941ef74d3a/ptis.json').
    }
  }


});
