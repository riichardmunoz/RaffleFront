import { TestBed } from '@angular/core/testing';

import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  });

  describe('#setSpinnerShow', () => {

    it('showSpinner$ should be true', () => {
      // Arrange
      const showSpinner = true;
      const spy = spyOn(service['_showSpinner$'], 'next')
      // Act
      service.setSpinnerShow(showSpinner);
      // Assert
      service.getShowSpinner().subscribe((showSpinner) => {
        expect(showSpinner).toEqual(showSpinner)
      });
      expect(spy).toHaveBeenCalled()
    });
  })
});
