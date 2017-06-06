(function() {
  'use strict';

  angular.module('app')
    .controller('ItemDetailController', ItemDetailController);

  // 'item' is injected through state's resolve
  ItemDetailController.$inject = ['item']

  function ItemDetailController(item) {

    var itemDetail = this;
    itemDetail.name = item;
    itemDetail.label = item.label;
    itemDetail.total = item.total;
    // itemDetail.description = item.description;
  }

})();
// (function() {
//   'use strict';
//
//   angular
//     .module('app')
//     .component('itemDetail', {
//       .controller('ItemDetailController', ItemDetailController);
//
//       // 'item' is injected through state's resolve
//       ItemDetailController.$inject = ['item']
//
//       function ItemDetailController(item) {
//         var itemDetail = this;
//         itemDetail.name = item.name;
//         itemDetail.quantity = item.quantity;
//         itemDetail.description = item.description;
//       }
//
//     })
//
// })
// ;
