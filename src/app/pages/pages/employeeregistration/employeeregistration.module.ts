/**
 * Created by sagar on 3/8/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {EmployeeRegistrationComponent} from "./employeeregistration.componet";
import {AmexioWidgetModule} from "../../../../components/index";

const routes: Routes = [
  { path: '', component: EmployeeRegistrationComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule
  ],
  exports: [RouterModule],
  declarations : [
    EmployeeRegistrationComponent
  ],
  providers : []
})
export class EmployeeRegistrationModule { }
