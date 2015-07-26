/**
 * Created by james on 7/26/15.
 */
describe('SimpleService', function(){
    var mockWindowSvc, mockModalSvc, simpleService;

    beforeEach(function(){
        module(function($provide){
            $provide.service('$window', function(){
                this.alert= jasmine.createSpy('alert');
            });

            $provide.service('modalSvc', function(){
                this.showModalDialog = jasmine.createSpy('showModalDialog');
            });
        });

        module('services');
    });

    beforeEach(inject(function($window, modalSvc, SimpleService){
        mockWindowSvc = $window;
        mockModalSvc = modalSvc;
        simpleService = SimpleService;
    }));

    it('should show alert when title is not passed into showDialog', function(){
        var message = "Some message";
        simpleService.showDialog(message);

        expect(mockWindowSvc.alert).toHaveBeenCalledWith(message);
        expect(mockModalSvc.showModalDialog).not.toHaveBeenCalled();
    });

    it('should show modal when title is passed into showDialog', function(){
        var message = "Some message";
        var title = "Some title";
        simpleService.showDialog(message, title);

        expect(mockModalSvc.showModalDialog).toHaveBeenCalledWith({
            message: message,
            title: title
        });

        expect(mockWindowSvc.alert).not.toHaveBeenCalled();
    });
});