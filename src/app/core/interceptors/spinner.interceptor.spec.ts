import { HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SpinnerService } from '@core/services/spinner/spinner.service';
import { Observable } from 'rxjs';
import { SpinnerInterceptor } from './spinner.interceptor';

describe('SpinnerInterceptor', () => {
  let spinnerService: SpinnerService;
  const next: any = {
    handle: () => {
      return new Observable((subscriber) => {
        subscriber.complete();
      });
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SpinnerInterceptor,
        { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
      ]
    })
    spinnerService = TestBed.inject(SpinnerService);
  });

  it('The counter should be at 0 ', () => {
    // Arrange
    const interceptor: SpinnerInterceptor = TestBed.inject(SpinnerInterceptor);
    const requestMock = new HttpRequest('POST', '/test', {});
    // Act
    interceptor.intercept(requestMock, next)
      .subscribe();

    expect(interceptor['requestCounter']).toEqual(0);

  });


  it('You should not call the setSpinnerShow method of the spinnerService service.', () => {
    // Arrange
    spyOn(spinnerService, 'setSpinnerShow');
    const interceptor: SpinnerInterceptor = TestBed.inject(SpinnerInterceptor);
    const requestMock = new HttpRequest('POST', '/test', {});
    interceptor['requestCounter'] = 1;
    // Act
    interceptor.intercept(requestMock, next)
      .subscribe();
    // Assert   
    expect(interceptor['requestCounter']).toEqual(1);

    expect(spinnerService.setSpinnerShow).toHaveBeenCalledTimes(0);
  });

});

