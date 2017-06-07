'use strict';

angular.
module('core.phone').
factory('Phone', ['$resource',
  function($resource) {
    // return $resource('phones/:phoneId.json', {}, {
    return $resource('tasks/:itemId.json', {}, {
      query: {
        method: 'GET',
        params: {
          phoneId: 'phones'
        },
        isArray: true
      }
    });
  }
]);
