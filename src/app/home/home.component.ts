import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
declare var $;
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent implements OnInit{
  isMobile : boolean;
  deviceHeight : any;
  deviceWidth : any;
  constructor(private _router : Router){
    this._router.navigate(['/home/dashboard']);
  }
  routeToLink(data: any){
    if(!data.hasOwnProperty('childrens') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
  reAdjust(){
    this.deviceHeight = $(window).height();
    this.deviceWidth = $(window).width();
    if(this.deviceWidth < 995){
      this.isMobile = true;
    }
  }
  onResize(event:any){

    this.reAdjust();
    if (event.target.innerWidth < 995) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  ngOnInit(){
    this.reAdjust();
  }
}
