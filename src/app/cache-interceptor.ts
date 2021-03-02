import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { publishReplay, refCount } from "rxjs/operators";
import { CacheService } from "./cache.service";

@Injectable({
    providedIn: 'root'
  })
export class CacheInterceptor implements HttpInterceptor {

    constructor(private cacheService: CacheService) {
        console.log('Se instancia CacheInterceptor');
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cache = this.cacheService.getCache(req.url, req.params);
        if(cache) {
          return cache;
        }
        else {
          const response = next.handle(req).pipe(publishReplay(1),refCount());
          this.cacheService.saveCache(req.url, req.params,response);
          return response;
        }
      }
}