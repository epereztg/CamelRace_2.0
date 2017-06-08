var service = angular.module('core.services');

service.factory('TasksService', function($http) {
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
