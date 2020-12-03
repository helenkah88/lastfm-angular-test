import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_KEY = 'f6b683d24ac913a1e726652ba1e01825';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const newReq = request.clone({
      params: request.params.set('api_key', API_KEY)
    });

    return next.handle(newReq);
  }
}
