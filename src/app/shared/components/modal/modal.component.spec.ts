import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let modal: jasmine.SpyObj<NgbActiveModal>;

  const modalSpy = jasmine.createSpyObj('NgbActiveModal', ['close']);
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers: [{ provide: NgbActiveModal , useValue: modalSpy }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    modal = TestBed.inject(NgbActiveModal) as jasmine.SpyObj<NgbActiveModal>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit true', () => {
    component.confirmed.pipe(first()).subscribe((resp) => {
     expect(resp).toBeTrue();
    });
    component.confirm();
    fixture.detectChanges();
  });

  it('should not emit', () => {
    component.closed.pipe(first()).subscribe((resp) => {
     expect(resp).toBe(undefined);
    });
    component.cancel();
    fixture.detectChanges();
  });
});
