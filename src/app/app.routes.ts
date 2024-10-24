import { Routes } from '@angular/router';
import { OnSiteLoadComponent } from './components/on-site-load/on-site-load.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';


export const routes: Routes = [
  {path: '' , component: OnSiteLoadComponent},
  {path: 'create-account' , component: CreateAccountComponent},
];
