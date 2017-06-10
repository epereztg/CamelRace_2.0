app.factory('TasksService', function($http) {

      return {
        list: function() {
          // $http.get('tasks/tasks.json').success(callback); //shows;
          return $http.get('tasks/tasks.json');
        },
        find: function(id) {
          return _.find($http.get('tasks/tasks.json'), function(show) {
            return show.id == id
          });

          list2: function(callback) {
            $http.get('countries.json').success(callback);
          }

        }
      });
