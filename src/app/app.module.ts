import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {LandingPageComponent} from "./landingpage.component";
import {AmexioWidgetModule} from "../components/index";
import {CommonHttpService} from "../components/common.http.service";
import {ChartLoaderService} from "../components/modules/charts/chart.loader.service";
const APP_ROUTE: Routes = [
  { path: '', component: LandingPageComponent},
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
  providers: [CommonHttpService,ChartLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
