/**
 * Created by sagar on 2/8/17.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'email',
  templateUrl: 'email.html'
})

export class EmailComponent implements OnInit {
  isComposeOpen : boolean;

  constructor() {
    this.isComposeOpen=false;
  }
  onRowSelect(event:any){

  }
  onRowClick(event:any){

  }
  toggle(){
    this.isComposeOpen = !this.isComposeOpen;
  }
  ngOnInit() { }
}
