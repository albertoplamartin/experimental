import { HttpEvent, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private mapCache: Map<String, Observable<HttpEvent<any>>>;
  private pendingCachingUrls: {url:string, cacheExpirationTime: number}[];

  constructor() { 
    this.mapCache = new Map<String, Observable<HttpEvent<any>>>();
    this.pendingCachingUrls = [];
  }

  saveCache(url: string, params: HttpParams, data$: Observable<HttpEvent<any>>) {
    if (url && data$) {
      const key = CacheService.generateKey(url, params);
      if (key) {
        const singlePendingCachingUrl = this.pendingCachingUrls.find(item => item.url === key);
        if (singlePendingCachingUrl) {
          this.mapCache.set(key, data$);
          this.pendingCachingUrls = this.pendingCachingUrls.filter(item => item.url !== key);
          setTimeout(() => {
            console.log('Se borra la cache');
            this.mapCache.delete(key);
          }, singlePendingCachingUrl.cacheExpirationTime);
        }
      }
    }
  }

  setCache(url: string, cacheExpirationTime: number, params?: HttpParams) {
    const newKey = CacheService.generateKey(url,params);
    
    if(newKey && cacheExpirationTime && cacheExpirationTime > 0) {
      const keys = [...this.mapCache].map((entry) => entry[0]);
      const existNewKey = keys.some((keyItem) => keyItem === newKey); 
      if(!existNewKey) {
        this.pendingCachingUrls.push({url: newKey, cacheExpirationTime: cacheExpirationTime});
      }
    }
  } 

  getCache(url: string, params: HttpParams): Observable<HttpEvent<any>> | null {
    const keyCache = CacheService.generateKey(url,params);
    if(keyCache) {
      const dataCache = this.mapCache.get(keyCache);
      return dataCache ? dataCache : null;
    }
    return null;
  }

  private static generateKey(url: string, params?: HttpParams): string | null {
    if (url && url.trim().length > 0) {
      if (params && params.keys.length > 0) {
        return `${url}?${params.toString()}`;
      }
      return url;
    }
    return null;
  }

}
