import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Alert } from '@core/models/alert';
import { AlertEnum } from '@core/models/alert.enum';

import { AlertService } from './alert.service';

describe('AlertService', () => {
  let service: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertService);
  });

  describe('#alert$', () => {

    it('The alert should be null', (doneFn) => {
      // Act
      service.alert$.subscribe((alert) => {
        // Assert
        expect(alert).toBeNull();
        doneFn();
      });

    });

    it('I should add the alert message', (doneFn) => {
      // Arrange
      const alert: Alert = new Alert({
        message: 'Hola Mundo!',
        type: AlertEnum.info
      })
      const alertNextSpy = spyOn(service['_alert$'], 'next');
      // Act
      service.setAlert(alert);

      // Assert
      service.alert$.subscribe((alert) => {
        expect(alert).toEqual(alert);
        doneFn();
      });
      expect(alertNextSpy).toHaveBeenCalled();

    });

  });

  describe('#showAlertInfo', () => {

    it('You should call the setAlert and hideAlert functions', () => {
      // Arrange
      const message = 'Hola Mundo!';
      const setAlertSpy = spyOn(service, 'setAlert');
      const hideAlertSpy = spyOn(service, 'hideAlert');
      // Act
      service.showAlertInfo(message);
      // Assert
      expect(setAlertSpy).toHaveBeenCalled();
      expect(hideAlertSpy).toHaveBeenCalled();
    });

  });

  describe('#showAlertError', () => {

    it('You should call the setAlert and hideAlert functions', () => {
      // Arrange
      const message = 'Hola Mundo!';
      const setAlertSpy = spyOn(service, 'setAlert');
      const hideAlertSpy = spyOn(service, 'hideAlert');
      // Act
      service.showAlertError(message);
      // Assert
      expect(setAlertSpy).toHaveBeenCalled();
      expect(hideAlertSpy).toHaveBeenCalled();
    });

  });

  describe('#hideAlert', () => {

    it('You should call the setAlert function', fakeAsync(() => {
      // Arrange 
      const setAlertSpy = spyOn(service, 'setAlert').and.callThrough();
      // Act
      service.hideAlert();
      tick(service['time']);
      // Assert
      expect(setAlertSpy).toHaveBeenCalled();
    }));

  });

  describe('#alert type', () => {

    it('info type alert', () => {
      // Arrange
      const message = 'Hola Mundo!';
      const alert: Alert = new Alert({
        message: 'Hola Mundo!',
        type: AlertEnum.info
      })
      // Act
      service.showAlertInfo(message);
      // Assert
      expect(alert.isInfo()).toBeTrue();
    });

    it('error type alert', () => {
      // Arrange
      const message = 'Hola Mundo!';
      const alert: Alert = new Alert({
        message: 'Hola Mundo!',
        type: AlertEnum.error
      })
      // Act
      service.showAlertInfo(message);
      // Assert
      expect(alert.isError()).toBeTrue();
    });

    it('Alert of type isSuccess', () => {
      // Arrange
      const message = 'Hola Mundo!';
      const alert: Alert = new Alert({
        message: 'Hola Mundo!',
        type: AlertEnum.success
      })
      // Act
      service.showAlertInfo(message);
      // Assert
      expect(alert.isSuccess()).toBeTrue();
    });

    it('Alert of type isWarning', () => {
      // Arrange
      const message = 'Hola Mundo!';
      const alert: Alert = new Alert({
        message: 'Hola Mundo!',
        type: AlertEnum.warning
      })
      // Act
      service.showAlertInfo(message);
      // Assert
      expect(alert.isWarning()).toBeTrue();
    });

  });



});
