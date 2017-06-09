(function() {
  'use strict';

  angular.module('core.components')
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
  };
  // self.setImage = function setImage(imageUrl) {
  // self.setImage = function setImage() {
  //   self.mainImageUrl = "images/walkingCamel.gif";
  // };



})();
