/**
 * Created by pratik on 26/7/17.
 */
import {Component, Input} from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'top-nav-bar',
  templateUrl : 'topnavbar.component.html'
})
export class TopNavBarComponent {

  httpResponse : any;

  menuData : any[] = [];
  data : any=[];

  constructor(public _http : Http,private _router : Router){
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

  onClick(menuItem:any){
    if(menuItem.menuId && menuItem.menuId==1){
      this._router.navigate(['/home/dashboard']);
    }
    if(menuItem.menuId && menuItem.menuId==2){
      this.data.push({'msg':'You have new email', 'type' : 'info'});
    }
  }
}
