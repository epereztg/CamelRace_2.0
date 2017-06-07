﻿
"use strict";

// Register `barList` component, along with its associated controller and template
angular.
module("app").
component("barList", {
  bindings: {
    width: '=',
    height: '=',
    max: '=',
    data: '='
  },
  templateUrl: 'bar-list/bar-list.template.html',
  controller: ['$http', function barListController($http) {
    var self = this;
    self.image = '../images/walkingCamel.gif';
  }]
});
