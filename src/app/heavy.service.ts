import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeavyRandomModel } from './heavy-random-model';
import { CacheService} from 'src/app/cache.service';

@Injectable({
  providedIn: 'root'
})
export class HeavyService {
  private mapHeavyRandom: Map<String, Observable<HeavyRandomModel>>;
  constructor(private http: HttpClient, private cacheService: CacheService) { 
    this.mapHeavyRandom = new Map<String, Observable<HeavyRandomModel>>();
  }

  getHeavyRandonNumber(id: number): Observable<HeavyRandomModel> {
    const url: string = `http://localhost:8080/demo/heavyRandomData/${id}`;
    this.cacheService.setCache(url,2000);
    return this.http.get<HeavyRandomModel>(url);
  }

   // Clear configs
   clearCache(url: string) {
     if(this.mapHeavyRandom.get(url)) {
        this.mapHeavyRandom.delete(url);
     }
  }
}
