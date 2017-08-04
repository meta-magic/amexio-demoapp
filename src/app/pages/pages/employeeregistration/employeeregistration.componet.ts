/**
 * Created by sagar on 3/8/17.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employeeregistration',
  templateUrl: 'employeeregistration.html'
})

export class EmployeeRegistrationComponent implements OnInit {
 resp:any;
  countryName:string;
  stateName:string;
  cityName:string;
  date3:any;
  currentDate : Date = new Date();
  time : Date = new Date();
  datepickerOpts = {
    startDate: new Date(),
    autoclose: true,
    todayBtn: 'linked',
    todayHighlight: true,
    assumeNearbyYear: true,
    format: 'D, d MM yyyy'
  };
  constructor() {
     this.resp={
      "alarm" : null,
      "response" : {
        "success": true,
        "message": "Fetching  Data  Request Succeeded: Sport",
        "data": [
          {"sportName": "Cricket","code": "Ck"},
          {"sportName": "Swimming","code": "Sw"},
          {"sportName": "Golf","code": "Glf"},
          {"sportName": "Hockey","code": "Hky"},
          {"sportName": "Soccer","code": "Scr"},
          {"sportName": "Formula One","code": "F1"}
        ]
      }
    };
  }
  getSingleVal(event:any){

  }
  getCountry(event:any){

  }
  getCity(event:any){

  }
  getState(event:any){

  }
  ngOnInit() { }
}
