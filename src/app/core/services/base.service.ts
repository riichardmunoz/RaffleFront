import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Options } from '@core/models/options';



@Injectable({
    providedIn: 'root'
})
export class BaseService {
    constructor(protected http: HttpClient) { }

    protected createDefaultOptions(): Options {
        return {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }

    protected createOptions(opts?: Options): Options {
        const defaultOpts: Options = this.createDefaultOptions();

        if (opts) {
            opts = {
                params: opts.params || defaultOpts.params,
                headers: opts.headers || defaultOpts.headers
            };

            if (!opts.headers?.get('Content-Type')) {
                opts.headers?.set('Content-Type', defaultOpts.headers?.get('Content-Type') || '');
            }
        }

        return opts || defaultOpts;
    }


    protected doGet<T>(serviceUrl: string, opts?: Options): Observable<T> {
        const ropts = this.createOptions(opts);

        return this.http.get(serviceUrl, ropts).pipe(
            map(response => response as T)
        );
    }

    protected doPost<T, R>(serviceUrl: string, body: T, opts?: Options): Observable<R> {
        const ropts = this.createOptions(opts);

        return this.http.post(serviceUrl, body, ropts).pipe(
            map(response => response as R)
        );
    }

    protected doPut<T, R>(serviceUrl: string, body?: T, opts?: Options): Observable<R> {
        const ropts = this.createOptions(opts);

        return this.http.put(serviceUrl, body, ropts).pipe(
            map(response => response as R)
        );
    }
}
