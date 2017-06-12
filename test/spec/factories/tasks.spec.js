'use strict';

describe('Factory: TasksService', function() {
  var myService = null;
  var responseData = null;
  var items = null;

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

  it('should return 12 items', function() {
    console.log("AAAAAAAAAAA");
    myService.getList()
      .then(function(items) {
        responseData = items;
      });
    console.log(items);
    expect(responseData.length).toBe(12);
    console.log("BBBBBBBBBBBN");

    );
    myService.getList()
      .then(function(items) {
        console.log(items);
        //        expect(items.length).toBe(132152413);
        expect(items).toContain('Task1');
        //return items[$stateParams.itemId];
      });
    console.log("BBBBBBBBBBBN");


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
