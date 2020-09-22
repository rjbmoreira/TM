import { Component, OnInit } from '@angular/core';
import { DBAccessService } from 'src/app/services/dbaccess.service';
import { TimeInput } from '../../models/timeinput';

@Component({
  selector: 'app-section-overview',
  templateUrl: './section-overview.component.html',
  styleUrls: ['./section-overview.component.css']
})
export class SectionOverviewComponent implements OnInit {
  
  timeInputs: TimeInput[] = [
      ];

  constructor(private dbaccess: DBAccessService) { }

  getTimeInputs(): void {
    this.dbaccess.getTimeInputs()
      .subscribe(res => {
        console.log('Result from getTimeInputs: ', res);
        this.timeInputs = res as TimeInput[];   
      });
  }

  ngOnInit(): void {
    this.getTimeInputs();
  }

}
