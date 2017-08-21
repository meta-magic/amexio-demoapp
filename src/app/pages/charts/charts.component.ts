/**
 * Created by sagar on 2/8/17.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'charts',
  templateUrl: 'charts.html'
})

export class ChartsComponent implements OnInit {
  barStackChartData:any;
  barChartData:any;
  comparasionChartData:any;
  columnStackChartData:any;
  columnChartData:any;
  pieChartData:any;
  histogramChartData:any;
  bubbleChartData:any;
  scatterChartData:any;
  lineChartData:any;
  areaChartData:any;
  timelineChartData:any;
  bubbleChartColorAxis:any;
  comboChartData:any;
  candlestickChartData:any;
  candlestickWaterfallChart:any;
  constructor() {
    this.comparasionChartData=[
      ['City', '2010 Population', '2000 Population'],
      ['New York City, NY', 8175000, 8008000],
      ['Los Angeles, CA', 3792000, 3694000],
      ['Chicago, IL', 2695000, 2896000],
      ['Houston, TX', 2099000, 1953000],
      ['Philadelphia, PA', 1526000, 1517000]
    ];
    this.barStackChartData=[
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350]
    ];
    this.barChartData = [
      ['City', '2010 Population',],
      ['New York City, NY', 8175000],
      ['Los Angeles, CA', 3792000],
      ['Chicago, IL', 2695000],
      ['Houston, TX', 2099000],
      ['Philadelphia, PA', 1526000]
    ];
    this.columnStackChartData=[
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
    this.columnChartData = [
      [{"dataType":'timeofday',"label":'Time of Day'},
        {"dataType":"number", "label":'Motivation Level'}
      ],
      [{v: [8, 0, 0], f: '8 am'}, 1],
      [{v: [9, 0, 0], f: '9 am'}, 2],
      [{v: [10, 0, 0], f:'10 am'}, 3],
      [{v: [11, 0, 0], f: '11 am'}, 4],
      [{v: [12, 0, 0], f: '12 pm'}, 5],
      [{v: [13, 0, 0], f: '1 pm'}, 6],
      [{v: [14, 0, 0], f: '2 pm'}, 7],
      [{v: [15, 0, 0], f: '3 pm'}, 8],
      [{v: [16, 0, 0], f: '4 pm'}, 9],
      [{v: [17, 0, 0], f: '5 pm'}, 10],
    ];
    this.pieChartData=[
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ];
    this.histogramChartData=[
      ['Dinosaur', 'Length'],
      ['Acrocanthosaurus (top-spined lizard)', 12.2],
      ['Albertosaurus (Alberta lizard)', 9.1],
      ['Allosaurus (other lizard)', 12.2],
      ['Apatosaurus (deceptive lizard)', 22.9],
      ['Archaeopteryx (ancient wing)', 0.9],
      ['Argentinosaurus (Argentina lizard)', 36.6],
      ['Baryonyx (heavy claws)', 9.1],
      ['Brachiosaurus (arm lizard)', 30.5],
      ['Ceratosaurus (horned lizard)', 6.1],
      ['Coelophysis (hollow form)', 2.7],
      ['Compsognathus (elegant jaw)', 0.9],
      ['Deinonychus (terrible claw)', 2.7],
      ['Diplodocus (double beam)', 27.1],
      ['Dromicelomimus (emu mimic)', 3.4],
      ['Gallimimus (fowl mimic)', 5.5],
      ['Mamenchisaurus (Mamenchi lizard)', 21.0],
      ['Megalosaurus (big lizard)', 7.9],
      ['Microvenator (small hunter)', 1.2],
      ['Ornithomimus (bird mimic)', 4.6],
      ['Oviraptor (egg robber)', 1.5],
      ['Plateosaurus (flat lizard)', 7.9],
      ['Sauronithoides (narrow-clawed lizard)', 2.0],
      ['Seismosaurus (tremor lizard)', 45.7],
      ['Spinosaurus (spiny lizard)', 12.2],
      ['Supersaurus (super lizard)', 30.5],
      ['Tyrannosaurus (tyrant lizard)', 15.2],
      ['Ultrasaurus (ultra lizard)', 30.5],
      ['Velociraptor (swift robber)', 1.8]];
    this.bubbleChartData=[
      ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
      ['CAN',    80.66,              1.67,      'North America',  33739900],
      ['DEU',    79.84,              1.36,      'Europe',         81902307],
      ['DNK',    78.6,               1.84,      'Europe',         5523095],
      ['EGY',    72.73,              2.78,      'Middle East',    79716203],
      ['GBR',    80.05,              2,         'Europe',         61801570],
      ['IRN',    72.49,              1.7,       'Middle East',    73137148],
      ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
      ['ISR',    81.55,              2.96,      'Middle East',    7485600],
      ['RUS',    68.6,               1.54,      'Europe',         141850000],
      ['USA',    78.09,              2.05,      'North America',  307007000]
    ];
    this.scatterChartData=[
      ['Age', 'Weight'],
      [ 8,      12],
      [ 4,      5.5],
      [ 11,     14],
      [ 4,      5],
      [ 3,      3.5],
      [ 6.5,    7]
    ];
    this.lineChartData=[
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
    this.areaChartData=[
      ['Year', 'Sales', 'Expenses'],
      ['2013',  1000,      400],
      ['2014',  1170,      460],
      ['2015',  660,       1120],
      ['2016',  1030,      540]
    ];
    this.timelineChartData=[
      [{"dataType":'string',"label":'Prime Minister'},
        {"dataType":"date", "label":'Start'},
        {"dataType":"date","label":"End"}
      ],
      [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
      [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]
    ];
    this.comboChartData=[
      ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
      ['2004/05',  165,      938,         522,             998,           450,      614.6],
      ['2005/06',  135,      1120,        599,             1268,          288,      682],
      ['2006/07',  157,      1167,        587,             807,           397,      623],
      ['2007/08',  139,      1110,        615,             968,           215,      609.4],
      ['2008/09',  136,      691,         629,             1026,          366,      569.6]
    ];
    this.bubbleChartColorAxis=[
      ['ID', 'X', 'Y', 'Temperature'],
      ['',   80,  167,      120],
      ['',   79,  136,      130],
      ['',   78,  184,      50],
      ['',   72,  278,      230],
      ['',   81,  200,      210],
      ['',   72,  170,      100],
      ['',   68,  477,      80]
    ];
    this.candlestickChartData=[
      ['Mon', 20, 28, 38, 45],
      ['Tue', 31, 38, 55, 66],
      ['Wed', 50, 55, 77, 80],
      ['Thu', 77, 77, 66, 50],
      ['Fri', 68, 66, 22, 15]
    ];
    this.candlestickWaterfallChart=[
      ['Mon', 28, 28, 38, 38],
      ['Tue', 38, 38, 55, 55],
      ['Wed', 55, 55, 77, 77],
      ['Thu', 77, 77, 66, 66],
      ['Fri', 66, 66, 22, 22]
      // Treat the first row as data.
    ];
  }

  ngOnInit() { }
}
