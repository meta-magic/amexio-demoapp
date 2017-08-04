/**
 * Created by sagar on 3/8/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {IssueComponent} from "./issue.component";

const routes: Routes = [
  { path: '', component: IssueComponent }
];

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule
  ],
  exports: [RouterModule],
  declarations : [
    IssueComponent
  ],
  providers : []
})
export class IssueModule { }
