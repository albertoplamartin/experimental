import { Component, OnInit } from '@angular/core';
import { HeavyService} from 'src/app/heavy.service';
@Component({
  selector: 'app-experiemntal-cache-component',
  templateUrl: './experiemntal-cache-component.component.html',
  styleUrls: ['./experiemntal-cache-component.component.scss']
})
export class ExperiemntalCacheComponentComponent implements OnInit {

  constructor(private HeavyService : HeavyService) { }

  ngOnInit(): void {


  }

}
