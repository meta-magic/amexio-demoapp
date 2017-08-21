/**
 * Created by sagar on 2/8/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DashboardTemplateTeComponent} from "./dashboardtemplate.component";
import {AmexioWidgetModule} from "../../../components/index";

const routes: Routes = [
  { path: '', component: DashboardTemplateTeComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule
  ],
  exports: [RouterModule],
  declarations : [
    DashboardTemplateTeComponent
  ],
  providers : []
})
export class DashboardTemplateModule { }
