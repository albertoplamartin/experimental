import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExperimentalCacheService } from '../experimental-cache.service';
import { HeavyRandomModel } from '../heavy-random-model';

@Component({
  selector: 'app-hijo-paco',
  templateUrl: './hijo-paco.component.html',
  styleUrls: ['./hijo-paco.component.scss']
})
export class HijoPacoComponent implements OnInit {
  heavyRandomNumber?: HeavyRandomModel;
  constructor(private experimentalService: ExperimentalCacheService) { 
    
  }

  ngOnInit(): void {
    this.experimentalService.getHeavyRandonNumber(1).subscribe((result)=>{
      this.heavyRandomNumber = result;
    },
    (error: HttpErrorResponse)=>{
      console.log(error.toString());
    });
  }

}
