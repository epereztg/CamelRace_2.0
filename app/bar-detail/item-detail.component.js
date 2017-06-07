(function() {
  'use strict';

  angular.module('app')
    //angular.module('itemDetail')
    .controller('ItemDetailController', ItemDetailController);

  // 'item' is injected through state's resolve
  ItemDetailController.$inject = ['item']

  function ItemDetailController(item) {

    var itemDetail = this;
    //itemDetail.name = item;
    itemDetail.label = item.label;
    itemDetail.total = item.total;
    itemDetail.current = item.current;

    // itemDetail.name = item.name;
    // itemDetail.quantity = item.quantity;
    // itemDetail.description = item.description;

  }
})();
