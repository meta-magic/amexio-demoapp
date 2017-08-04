/**
 * Created by pratik on 26/7/17.
 */
import {Component, Input} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'top-nav-bar',
  templateUrl : 'topnavbar.component.html'
})
export class TopNavBarComponent {

  httpResponse : any;

  menuData : any[] = [];

  constructor(public _http : Http){
    this._http.get('assets/data/menus/topmenu.json').subscribe(
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
}
