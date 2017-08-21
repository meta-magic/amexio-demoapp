/**
 * Created by sagar on 2/8/17.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-template',
  templateUrl: 'dashboardtemplate.html'
})

export class DashboardTemplateTeComponent implements OnInit {
  gaugeData:any;
  constructor() {
    this.gaugeData=[
      ['Label', 'Value'],
      ['Memory', 80],
      ['CPU', 55],
      ['Network', 68],
      ['Main Memory',88]
    ];
  }
  ngOnInit() { }
}
