import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AmexioWidgetModule, CommonHttpService} from "amexio-ng-extensions";
import {RouterModule, Routes} from "@angular/router";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {LandingPageComponent} from "./landingpage.component";
const APP_ROUTE: Routes = [
  { path: '', component: AppComponent},
  {path:'landing',component:LandingPageComponent},
  {path:'home',loadChildren:'./home/home.module#HomeModule'}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
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
