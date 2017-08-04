import { Component } from '@angular/core';
import {Router} from "@angular/router";
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMobile : boolean;
  deviceHeight : any;
  deviceWidth : any;
  constructor(private _router : Router){
    this._router.navigate(['/landing']);
  }
  routeToLink(data: any){
    if(!data.hasOwnProperty('childrens') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
  reAdjust(){
    this.deviceHeight = $(window).height();
    this.deviceWidth = $(window).width();
    if(this.deviceWidth < 768){
      this.isMobile = true;
    }
  }
  OnClickB(){
  debugger;
    this._router.navigate(['/home']);
  }

  onResize(event:any){
    this.reAdjust();
    if (event.target.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
