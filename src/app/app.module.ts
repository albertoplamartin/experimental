import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperiemntalCacheComponentComponent } from './experiemntal-cache-component/experiemntal-cache-component.component';
import { HeavyService } from './heavy.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HijoPacoComponent } from './hijo-paco/hijo-paco.component';
import { HijaMariaComponent } from './hija-maria/hija-maria.component';
import { CacheService } from './cache.service';
import { CacheInterceptor } from './cache-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ExperiemntalCacheComponentComponent,
    HijoPacoComponent,
    HijaMariaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HeavyService, CacheService, { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
