import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SESSION_STORAGE } from '@shared/constants/session-storage';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token: string;
  authReq: HttpRequest<unknown>
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.authReq = request;
    this.token = SESSION_STORAGE.msalToken

    if (this.token) {
      this.authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${this.token}`)
      });

    }
    return next.handle(this.authReq);
  }
}
