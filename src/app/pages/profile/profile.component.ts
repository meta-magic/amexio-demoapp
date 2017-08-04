/**
 * Created by sagar on 3/8/17.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})

export class ProfileComponent implements OnInit {
  public max:number = 10;
  public rate:number = 9;
  public isReadonly:boolean = false;
  public isPercent:boolean = true;

  constructor() {

  }
  ngOnInit() { }
}
