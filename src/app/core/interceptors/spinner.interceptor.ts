import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from '@core/services/spinner/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  private requestCounter = 0;
  constructor(private spinnerService: SpinnerService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.requestCounter) {
      this.spinnerService.setSpinnerShow(true);
    }

    this.requestCounter++;

    return next.handle(request)
      .pipe(finalize(() => {
        this.requestCounter--;
        if (!this.requestCounter) {
          this.spinnerService.setSpinnerShow(false);
        }
      }))
      ;
  }
}
