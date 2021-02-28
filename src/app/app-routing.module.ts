import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiemntalCacheComponentComponent } from './experiemntal-cache-component/experiemntal-cache-component.component';

const routes: Routes = [
  {path: 'cache-experimento',component: ExperiemntalCacheComponentComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
