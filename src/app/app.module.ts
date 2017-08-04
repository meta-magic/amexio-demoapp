import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AmexioWidgetModule, CommonHttpService} from "amexio-ng-extensions";
import {TopNavBarComponent} from "./layout/topnavbar.component";
import {RouterModule} from "@angular/router";
import {APP_ROUTE} from "./app.routes";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent
  ],
  imports: [
    BrowserModule,
    AmexioWidgetModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTE, { useHash: true }),
  ],
  providers: [CommonHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
