/**
 * Created by sagar on 4/8/17.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";

@Component({
 selector: 'landing-page',
 templateUrl:'landingpage.html',
  styles : [
    `
      .landing-page{
        background: center no-repeat transparent;
        background-image: url("./../assets/Nighthawk.jpg");
        height: 100vh;
        color: #cccccc;
      }
    `
  ]
})


export class LandingPageComponent implements OnInit {
  httpResponse : any;

  menuData : any[] = [];
 constructor( private _router : Router ,public _http : Http) {
   this._http.get('assets/data/menus/hometopmenu.json').subscribe(
     response=>{
       this.httpResponse = response.json()
     },
     error=>{
       //prompt on error
     },
     ()=>{
       this.menuData = this.httpResponse.menus;
     }
   );
 }
  routeDemo(event:any){
    this._router.navigate(['/home/dashboard']);
  }
 ngOnInit() { }

}
