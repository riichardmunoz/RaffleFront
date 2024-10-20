import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;
  const dialogMock = {
    open: () => { },
    close: () => { },
    afterClosed: () => { }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NoopAnimationsModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
      ]
    });
    service = TestBed.inject(ModalService);
  });

  describe('#openModalError', () => {

    it('It should execute the function openModal', () => {
      // Arrange
      let spy = spyOn(service.dialog, 'open').and.callThrough();
      const message = 'Error'
      // Act
      service.openModalError(message);
      // Assert
      expect(spy).toHaveBeenCalled();
    });

  });

  describe('#openModalConfirmation', () => {

    it('It should close the modal and return true', async () => {
      // Arrange
      spyOn(service.dialog, 'open').and.returnValue({ afterClosed: () => of(true) } as MatDialogRef<typeof service>);
      // Act
      const response = await service.openModalConfirmation();
      // Assert
      expect(service.dialog).toBeDefined();
      expect(response).toBeTrue();
    });

    it('It should close the modal and return false', async () => {
      // Arrange
      spyOn(service.dialog, 'open').and.returnValue({ afterClosed: () => of(false) } as MatDialogRef<typeof service>);
      // Act
      const response = await service.openModalConfirmation();
      // Assert
      expect(service.dialog).toBeDefined();
      expect(response).toBeFalse();
    });

  });

});
