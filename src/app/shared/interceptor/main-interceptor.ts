import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable()
export class MainInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.includes(environment.apiUrl)) {
            request = request.clone({
                withCredentials: true,
                setHeaders: {
                    'Content-Type': "application/json"
                }
            });
        }

        return next.handle(request);
    }
}