/**
 * Created by sagar on 2/8/17.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {TopNavBarComponent} from "../layout/topnavbar.component";
import {AmexioWidgetModule} from "../../components/index";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', component:HomeComponent,
    children: [
      {
        path: 'dashboard', loadChildren: './../pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'issue-status', loadChildren: './../pages/issuestatus/issuestatus.module#IssueStatusModule'
      },
      {
        path: 'email', loadChildren: './../pages/email/email.module#EmailModule'
      },
      {
        path: 'profile', loadChildren: './../pages/profile/profile.module#ProfileModule'
      },
      {
        path: 'employee-registration',
        loadChildren: './../pages/pages/employeeregistration/employeeregistration.module#EmployeeRegistrationModule'
      },
      {
        path: 'login', loadChildren: './../pages/pages/login/login.module#LoginModule'

      },
      {
        path: 'group-by-issue', loadChildren: './../pages/report/groupbyissue/groupbyissue.module#GroupbyIssueModule'
      },
      {
        path: 'issue', loadChildren: './../pages/report/issue/issue.module#IssueModule'
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    TopNavBarComponent
  ]
})
export class HomeModule {
}
