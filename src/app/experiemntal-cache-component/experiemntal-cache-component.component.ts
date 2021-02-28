import { Component, OnInit } from '@angular/core';
import { ExperimentalCacheService} from 'src/app/experimental-cache.service';
@Component({
  selector: 'app-experiemntal-cache-component',
  templateUrl: './experiemntal-cache-component.component.html',
  styleUrls: ['./experiemntal-cache-component.component.scss']
})
export class ExperiemntalCacheComponentComponent implements OnInit {

  constructor(private experimentalCacheService : ExperimentalCacheService) { }

  ngOnInit(): void {
    console.log(this.experimentalCacheService.holaMundo());

  }

}
