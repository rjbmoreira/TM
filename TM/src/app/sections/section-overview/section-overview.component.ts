import { Component, OnInit } from '@angular/core';
import { TimeInput } from '../../models/timeinput';

@Component({
  selector: 'app-section-overview',
  templateUrl: './section-overview.component.html',
  styleUrls: ['./section-overview.component.css']
})
export class SectionOverviewComponent implements OnInit {

  constructor() { }

  timeInputs: TimeInput[] = [
      ];

  ngOnInit(): void {
  }

}
