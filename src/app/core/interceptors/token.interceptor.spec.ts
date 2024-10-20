import { HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { TokenInterceptor } from './token.interceptor';

describe('TokenInterceptor', () => {
  const next: any = {
    handle: () => {
      return new Observable((subscriber) => {
        subscriber.complete();
      });
    }
  };


  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenInterceptor,
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    ],

  }));

  it('You should add the bearer token in the request ', () => {
    // Arrange
    const token = 'MYTOKENDKDKDKD'
    const interceptor: TokenInterceptor = TestBed.inject(TokenInterceptor);
    const requestMock = new HttpRequest('POST', '/test', {});
    sessionStorage.setItem('msal.idtoken', token)
    interceptor.token = token;
    // Act
    interceptor.intercept(requestMock, next)
      .subscribe(() => {

      });
    expect(interceptor.token).toBe(token);
    expect(interceptor.authReq.headers.get('Authorization')).toBe(`Bearer ${token}`);

  });

  it('You shouldnt add the token to the request', () => {
    // Arrange  
    sessionStorage.removeItem('msal.idtoken');
    const interceptor: TokenInterceptor = TestBed.inject(TokenInterceptor);
    const requestMock = new HttpRequest('POST', '/test', {});
    // Act
    interceptor.intercept(requestMock, next)
      .subscribe();
    expect(interceptor.token).toBeNull();
    expect(interceptor.authReq.headers.get('Authorization')).toBeNull();
  });
});
