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
    {customer: {id:1, name: "customer 1", email: "c1@example.com", phone: "+351911111111"}, project: {id:1, name:"projectC1", description:"pc1"}, timeSpent: 10},
    {customer: {id:1, name: "customer 2", email: "c2@example.com", phone: "+351912222222"}, project: {id:2, name:"projectC2", description:"pc2"}, timeSpent: 20},
    {customer: {id:1, name: "customer 3", email: "c3@example.com", phone: "+351913333333"}, project: {id:3, name:"projectC3", description:"pc3"}, timeSpent: 30},
    {customer: {id:1, name: "customer 4", email: "c4@example.com", phone: "+351914444444"}, project: {id:4, name:"projectC4", description:"pc4"}, timeSpent: 40}
  ];

  ngOnInit(): void {
  }

}
