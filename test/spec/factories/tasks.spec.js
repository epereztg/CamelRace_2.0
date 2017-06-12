'use strict';

describe('service under test', function() {
  var myService = null;

  beforeEach(module('core.services'));

  beforeEach(inject(function(_TasksService_) {
    myService = _TasksService_;

  }));
  //});
  //Example
  var TasksService;
  //Tasksservice
  it('can get an instance', inject(function(TasksService) {
    expect(TasksService).toBeDefined();
  }));

  // //
  it('should do something cool', function() {

    // var items = myService.getItems();
    // expect(items.length).toBe(2);
    myService.getList()
      .then(function(items) {
        console.log(items.length);
        expect(items.length).toBe(132152413);
        //return items[$stateParams.itemId];
      });

  });

});
