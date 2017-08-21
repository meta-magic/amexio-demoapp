/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author - Sagar Jadhav
*/

import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
declare var google;
@Injectable()
export class ChartLoaderService {
  private chartPackage: { [id: string]: string; } = {
    AreaChart: 'corechart',
    Bar: 'bar',
    BarChart: 'corechart',
    ColumnChart: 'corechart',
    PieChart: 'corechart',
    Gantt: 'gantt',
    Gauge: 'gauge',
    GeoChart: 'geochart',
    Histogram: 'corechart',
    Line: 'line',
    LineChart: 'corechart',
    Map: 'map',
    Timeline: 'timeline',
    BubbleChart:'corechart',
    CandlestickChart:'corechart',
    ComboChart:'corechart',
    TreeMap:'treemap'
  };
  isScriptLoading : boolean;
  private googleScriptLoadingNotifier: EventEmitter<boolean>;
  constructor() {
    this.googleScriptLoadingNotifier = new EventEmitter();
    this.isScriptLoading = false;
  }


  loadCharts(chartName : string) : Observable<any>{
    return new Observable(
      observer=>{
        this.loadScript().subscribe(
          val => console.log(),
          error => console.error(error),
          () => {
            this.loadRequiredChart(observer,chartName);
          }
        )
      }
    )
  }

  loadScript() : Observable<any>{
    return new Observable(
      observer=>{

        if(!this.isScriptLoading){
          //check if previously its loaded
          if (typeof google !== 'undefined' && google.charts){
            //check if chart package has been loaded using chartPackagename ?
            this.loadBaseChart(observer);
          }
          else{
            this.isScriptLoading = true;
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://www.gstatic.com/charts/loader.js';
            script.async = true;
            script.defer = true;
            script.onload = () => {
              this.isScriptLoading = false;
              this.googleScriptLoadingNotifier.emit(true);
              this.loadBaseChart(observer);
            };
            script.onerror = () => {
              observer.error('Could Not Load google Script');
            };
            document.getElementsByTagName('head')[0].appendChild(script);
          }
        }
        else {
          this.googleScriptLoadingNotifier.subscribe((loaded: boolean) => {
            if (loaded) {
              this.loadBaseChart(observer);
            }
          });
        }
      }
    );
  }


  /**
   * Load Base Chart
   * @param observer
   */
  loadBaseChart(observer : any) {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(() => {
      observer.complete();
    });
  }

  /**
   * Load the required charts
   * @param chartName
   */
  loadRequiredChart(observer : any,chartName : string){
    if(google.visualization.hasOwnProperty(chartName)){
      observer.complete();
    }
    else{
      google.charts.load('current', {'packages': [this.chartPackage[chartName]]});
      google.charts.setOnLoadCallback(() => {
        observer.complete();
      });
    }
  }





}
