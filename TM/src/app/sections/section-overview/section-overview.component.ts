import { Component, OnInit } from '@angular/core';
import { ProjectOverview } from 'src/app/models/projectOverview';
import { DBAccessService } from 'src/app/services/dbaccess.service';
import { OverviewEntry } from '../../models/overviewEntry';

@Component({
  selector: 'app-section-overview',
  templateUrl: './section-overview.component.html',
  styleUrls: ['./section-overview.component.css']
})
export class SectionOverviewComponent implements OnInit {
  
  overviewEntries: OverviewEntry [] = [
      ];


  constructor(private dbaccess: DBAccessService) { }

  getTimeInputsGroupedByProject(): void {
    this.dbaccess.getTimeInputsGroupedByProject()
      .subscribe(res => {
        console.log(res);  
        
        let overview : ProjectOverview[] = res as ProjectOverview[];
        for(var proj of overview){
          for(var ti of proj.timeInputs){
            this.overviewEntries.push(
              {timeInput: ti,
                 totalTime: proj.totalTime}
                 );
          }
        }

        console.log(this.overviewEntries);
      });
  }

 

  ngOnInit(): void {
    this.getTimeInputsGroupedByProject();
  }


}
