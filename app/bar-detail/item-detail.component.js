(function () {
'use strict';

angular.module('app')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['item']
function ItemDetailController(item) {
  var itemDetail = this;
  itemDetail.name = item.name;
  itemDetail.quantity = item.name;
  itemDetail.description = item.name;
}

})();
