/**
 * Created by sagar on 3/8/17.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

export class LoginComponent implements OnInit {
  currentDate : Date = new Date(2016, 5, 10);
  time : Date = new Date();
  datepickerOpts = {
    startDate: new Date(2016, 5, 10),
    autoclose: true,
    todayBtn: 'linked',
    todayHighlight: true,
    assumeNearbyYear: true,
    format: 'D, d MM yyyy'
  };
  constructor() {

  }

  ngOnInit() { }
}
