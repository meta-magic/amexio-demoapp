/**
 * Created by sagar on 2/8/17.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})

export class DashboardComponent implements OnInit {
  barStackData:any;
  lineData:any;
  columnStackData:any;
  donutData:any;
  areaData:any;
  gaugeData:any;
  openIssuedata:any;
  timelineData=[
    [{"dataType":'string',"label":'Prime Minister'},
      {"dataType":"date", "label":'Start'},
      {"dataType":"date","label":"End"}
    ],
    [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
    [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
    [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]];

  constructor() {
    this.barStackData=[
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350]
    ];
    this.lineData=[
      [{"dataType":"number" ,"label":'Day'},{"dataType":"number","label":'Guardians of the Galaxy'},
        {"dataType":"number","label":'The Avengers'},{"dataType":"number","label":'Transformers: Age of Extinction'}
      ],
      [1,  37.8, 80.8, 41.8],
      [2,  30.9, 69.5, 32.4],
      [3,  25.4,   57, 25.7],
      [4,  11.7, 18.8, 10.5],
      [5,  11.9, 17.6, 10.4],
      [6,   8.8, 13.6,  7.7],
      [7,   7.6, 12.3,  9.6],
      [8,  12.3, 29.2, 10.6],
      [9,  16.9, 42.9, 14.8],
      [10, 12.8, 30.9, 11.6],
      [11,  5.3,  7.9,  4.7],
      [12,  6.6,  8.4,  5.2],
      [13,  4.8,  6.3,  3.6],
      [14,  4.2,  6.2,  3.4]
    ];
    this.columnStackData=[
      [{"dataType":'timeofday',"label":'Time of Day'},
        {"dataType":"number", "label":'Motivation Level'},
        {"dataType":"number","label":"Energy Level"}
      ],
      [{v: [8, 0, 0], f: '8 am'}, 1, .25],
      [{v: [9, 0, 0], f: '9 am'}, 2, .5],
      [{v: [10, 0, 0], f:'10 am'}, 3, 1],
      [{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
      [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
      [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
      [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
      [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
      [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
      [{v: [17, 0, 0], f: '5 pm'}, 10, 10],
    ];
    this.donutData=[
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ];
    this.areaData=[
      ['Year', 'Sales', 'Expenses'],
      ['2013',  1000,      400],
      ['2014',  1170,      460],
      ['2015',  660,       1120],
      ['2016',  1030,      540]
    ];
    this.gaugeData=[
      ['Label', 'Value'],
      ['Memory', 80],
      ['CPU', 55],
      ['Network', 68]
    ];


    this.openIssuedata={
      response:{
        data:[{
          issueId:1,
          issueName:'Bug with .share operator?',
          checked:false
        },{
          issueId:2,
          issueName:"e.preventDefault broken in ie8",
          checked:false
        },{
          issueId:1,
          issueName:'Third groupBy argument (key serializer) ignored',
          checked:false
        }
        ]}};
  }
  onRowSelect(event:any){

  }
  onRowClick(event:any){

  }
  ngOnInit() { }
}
