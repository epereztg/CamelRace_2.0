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

describe('Factory: TasksService', function() {
  var myService = null;
  var responseData = null;
  var items = null;

  beforeEach(module('core.services'));
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
  it('should return 12 items', function() {
    console.log("AAAAAAAAAAA");
    myService.getList()
      .then(function(items) {
        responseData = items;
      });
    console.log(items);
    expect(responseData.length).toBe(12);
    console.log("BBBBBBBBBBBN");

  });

  //Example
  var TasksService;
  // beforeEach(function() {
  //   module('app');
  //   inject(function($injector) {
  //     TasksService = $injector.get('TasksService');
  //   });
  // });




});
