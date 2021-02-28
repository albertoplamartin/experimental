import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeavyRandomModel } from './heavy-random-model';
import { publishReplay, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalCacheService {
  private mapHeavyRandom: Map<String, Observable<HeavyRandomModel>>;
  constructor(private http: HttpClient ) { 
    this.mapHeavyRandom = new Map<String, Observable<HeavyRandomModel>>();
  }

  holaMundo(): string {
    return 'Hola mundo!!';
  }

  getHeavyRandonNumber(id: number): Observable<HeavyRandomModel> {
    const url: string = `http://localhost:8080/demo/heavyRandomData/${id}`;
    const cacheHeavyRandom$ = this.mapHeavyRandom.get(url);
    if(!cacheHeavyRandom$) {
      const observableHeavyRandom$ = this.http.get<HeavyRandomModel>(url).pipe(publishReplay(1),refCount());
      this.mapHeavyRandom.set(url, observableHeavyRandom$);
      return observableHeavyRandom$;
    }
    else {
      return cacheHeavyRandom$;
    }
    

  }

   // Clear configs
   clearCache(url: string) {
     if(this.mapHeavyRandom.get(url)) {
        this.mapHeavyRandom.delete(url);
     }
  }
}
