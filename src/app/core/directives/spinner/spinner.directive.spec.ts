import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SpinnerService } from '@core/services/spinner/spinner.service';
import { of } from 'rxjs';
import { SpinnerDirective } from './spinner.directive';

@Component({
  template: `
  <div class="lds-ellipsis-modal inactive" appSpinner>
   <span>Host components</span> 
 </div>
  `
})
class HostComponent {
  brand: string = 'Visa';
}

describe('SpinnerDirective', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let directive: SpinnerDirective;
  let spinnerService: jasmine.SpyObj<SpinnerService>;
  const spinnerServiceSpy = jasmine.createSpyObj('SpinnerService', ['setSpinnerShow', 'getShowSpinner']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent, SpinnerDirective],
      providers: [
        { provide: SpinnerService, useValue: spinnerServiceSpy },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    spinnerService = TestBed.inject(SpinnerService) as jasmine.SpyObj<SpinnerService>;
    spinnerService.getShowSpinner.and.returnValue(of(true));
    fixture.detectChanges();
  });

  describe('#listenObserver', () => {

    it('I should have the class inactive ', (() => {
      // Arrange
      spinnerService.getShowSpinner.and.returnValue(of(false));
      const debugElement = fixture.debugElement.query(By.directive(SpinnerDirective));
      directive = debugElement.injector.get(SpinnerDirective);
      const spy = spyOn(directive, 'showSpinner');
      // Act
      directive.listenObserver();
      fixture.detectChanges();
      // Assert 
      expect(debugElement.attributes['class']).toContain('inactive');
      expect(spy).toHaveBeenCalledTimes(0);
    }));

    it('Should not have class inactive', () => {
      // Arrange
      spinnerService.getShowSpinner.and.returnValue(of(true));
      const debugElement = fixture.debugElement.query(By.directive(SpinnerDirective));
      directive = debugElement.injector.get(SpinnerDirective);
      const spy = spyOn(directive, 'showSpinner');
      // Act
      directive.listenObserver();
      fixture.detectChanges();
      // Assert 
      expect(debugElement.attributes['class']).not.toContain('inactive');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('#ngOnInit', () => {

    it('You should call the function listenObserver', () => {
      // Arrange
      const debugElement = fixture.debugElement.query(By.directive(SpinnerDirective));
      directive = debugElement.injector.get(SpinnerDirective);
      const spy = spyOn(directive, 'listenObserver');
      // Act
      directive.ngOnInit();
      fixture.detectChanges();
      // Assert
      expect(spy).toHaveBeenCalled();
    });
  });

});
