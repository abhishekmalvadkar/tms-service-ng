import { SignInComponent } from './components/sign-in/sign-in.component';
import { Routes } from '@angular/router';
import { OnSiteLoadComponent } from './components/on-site-load/on-site-load.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';
import { HomeComponent } from './components/home/home.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MyReportComponent } from './components/my-report/my-report.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { authGuard } from './auth.guard';


export const routes: Routes = [
  { path: '', component: OnSiteLoadComponent , redirectTo : 'home'},
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'verify-account/:isVerified', component: VerifyAccountComponent },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard], // Protect this route
    children: [
      { path: '', component: TaskListComponent }, // Load TaskListComponent by default
      { path: 'my-report', component:  MyReportComponent },
      { path: 'create-task', component:  CreateTaskComponent },
      { path: 'view-task', component:  ViewTaskComponent },
      // Add more child routes here if needed
    ]
  },

];
