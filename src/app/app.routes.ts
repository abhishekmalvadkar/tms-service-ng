import { SignInComponent } from './components/sign-in/sign-in.component';
import { Routes } from '@angular/router';
import { OnSiteLoadComponent } from './components/on-site-load/on-site-load.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';
import { HomeComponent } from './components/home/home.component';
import { TaskListComponent } from './components/task-list/task-list.component';


export const routes: Routes = [
  { path: '', component: OnSiteLoadComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'verify-account/:isVerified', component: VerifyAccountComponent },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: TaskListComponent }, // Load TaskListComponent by default
      // Add more child routes here if needed
    ]
  },

];
