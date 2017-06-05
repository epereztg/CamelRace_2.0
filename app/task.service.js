app.factory('TasksService', function($http) {
  return {
    list: function(callback) {
      $http.get('tasks/tasks.json').success(callback); //shows;
    },
    find: function(id) {
      return _.find($http.get('tasks/tasks.json'), function(show) {
        return show.id == id
      });
    }

  }
});
