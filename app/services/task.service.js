var app = angular.module('app');

app.factory('TasksService', function($http, $q) {
  return {
    getList: function() {
      return $http.get('tasks/tasks.json').then(function(response) {
        return response.data;
      }, function() {
        throw 'There was an error getting data';
      });
    }
  }
});
