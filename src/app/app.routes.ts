import {Routes} from "@angular/router";
/**
 * Created by sagar on 2/8/17.
 */
export const APP_ROUTE: Routes = [{
  path: '', redirectTo: 'dashboard', pathMatch: 'full'
},
  {
    path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
},
  {
    path:'email',loadChildren:'./pages/email/email.module#EmailModule'
  },
  {
    path:'profile',loadChildren:'./pages/profile/profile.module#ProfileModule'
  },
  {
    path:'employee-registration',loadChildren:'./pages/pages/employeeregistration/employeeregistration.module#EmployeeRegistrationModule'
  },
  {
    path:'login',loadChildren:'./pages/pages/login/login.module#LoginModule'

  },
  {
    path:'group-by-issue',loadChildren:'./pages/report/groupbyissue/groupbyissue.module#GroupbyIssueModule'
  },
  {
    path:'issue',loadChildren:'./pages/report/issue/issue.module#IssueModule'
  }
]
