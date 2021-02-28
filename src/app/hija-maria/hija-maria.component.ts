import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExperimentalCacheService } from '../experimental-cache.service';
import { HeavyRandomModel } from '../heavy-random-model';

@Component({
  selector: 'app-hija-maria',
  templateUrl: './hija-maria.component.html',
  styleUrls: ['./hija-maria.component.scss']
})
export class HijaMariaComponent implements OnInit {
  heavyRandomNumber?: HeavyRandomModel;
  constructor(private experimentalService: ExperimentalCacheService) { 
    
  }
  ngOnInit(): void {
      this.experimentalService.getHeavyRandonNumber(2).subscribe((result)=>{
        this.heavyRandomNumber = result;
      },
      (error: HttpErrorResponse)=>{
        console.log(error.toString());
      });
  }

}
