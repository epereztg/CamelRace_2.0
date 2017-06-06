// 'use strict';
//
// describe('Factory: TasksService', function() {
//
//   // load the controller's module
//   beforeEach(function() {
//     console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
//   })
//   // beforeEach(module('app', ['TasksService']));
//   beforeEach(module('app'));
//
//   var TasksValidationService;
//
//   beforeEach(inject(function() {
//     var $injector = angular.injector(['app']);
//     TasksValidationService = $injector.get('TasksService');
//   }));
//
//   it('My TasksService works!!', function() {
//     var output = TasksValidationService.list(); //OfficerValidationService.something();
//     expect(output.length).toBe(12);
//     //expect(output).toBeTruthy();
//   });
//
//
//   // it('Esto es un test idiota', function() {
//   //   expect(output.length).toBe(12);
//   // });
// });
'use strict';

describe('service under test', function() {
  var myService = null;

  beforeEach(module('app'));
  //
  beforeEach(inject(function(_TasksService_) {
    myService = _TasksService_;

  }));
  //});

  //Tasksservice
  it('can get an instance', inject(function(TasksService) {
    expect(TasksService).toBeDefined();
  }));
  //
  // //
  it('should do something cool', function() {
    //var items = myService.fakeArray(); //testing array of 3 elements
    var items = myService.fakeJson();
    expect(items.length).toBe(2);
  });

  //Example
  var TasksService;
  // beforeEach(function() {
  //   module('app');
  //   inject(function($injector) {
  //     TasksService = $injector.get('TasksService');
  //   });
  // });
  // it('should return all items', function() {
  //
  // var items = TasksService.getItems();
  //
  // console.log(TasksService);
  // //expect(items[0].label).toContain('Task1');
  // // expect(items).toContain('Task1');
  // // expect(items).toContain('book');
  // // expect(items).toContain('pen');
  // expect(items.length).toEqual(3);
  // });



});
