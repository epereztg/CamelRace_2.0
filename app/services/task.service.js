var app = angular.module('app');

// app.factory('TasksService', ['ui.router'], function($http) {
app.factory('TasksService', function($http, $q) {
  //Example to test: $http.get('https://api.github.com/users/angular/repos');
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

  return {

    fakeArray: function() {
      return ['hat', 'book', 'pen'];
    },
    fakeJson: function() {
      return jsnFile;
    },
    findInfakeJson: function(id) {
      return this.fakeJson()[id];
    },
    getList: function() {
      return $http.get('tasks/tasks.json').then(function(response) {
        return response.data;
      }, function() {
        throw 'There was an error getting data';
      });
    },
    findinlist: function(id) {
      return this.findinlist()[id];
    },
    trueJson: function() {
      var defered = $q.defer();
      var promise = defered.promise;

      $http.get('tasks/tasks.json')
        .success(function(data) {
          defered.resolve(data);
        })
        .error(function(err) {
          defered.reject(err)
        });

      return promise;
      // var jsonFile = null;
      // $http.get('tasks/tasks.json').then(function(response) {
      //   jsonFile = response.data;
      // });
      // return jsonFile;
      //$http.get('https://gist.githubusercontent.com/idhamperdameian/239cc5a4dbba4488575d/raw/0a2ea4c6c120c9a8f02c85afcf7a31941ef74d3a/ptis.json').
    }
  }


});
