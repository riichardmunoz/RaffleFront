import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedModule } from '@shared/shared.module';

import { ModalErrorComponent } from './modal-error.component';

describe('ModalErrorComponent', () => {
  let component: ModalErrorComponent;
  let fixture: ComponentFixture<ModalErrorComponent>;
  const dialogMock = {
    open: () => { },
    close: () => { },
    afterClosed: () => { }
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ModalErrorComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: dialogMock },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ModalErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#It should show an error message', () => {
    // Arrange
    const message = 'Error';
    component.data.message = message;

    // Act
    fixture = TestBed.createComponent(ModalErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // Assert
    expect(component.data.message).toEqual(message);
  });
});
