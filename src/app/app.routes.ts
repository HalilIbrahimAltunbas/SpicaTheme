import { Routes } from '@angular/router';
import { DashboardComponent } from './Default/dashboard/dashboard.component';
import { NotFoundComponent } from './Authentication/not-found/not-found.component';
import { SignInComponent } from './Authentication/sign-in/sign-in.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'SignIn',
    component: SignInComponent,
  },
  {
    path: 'SignUp',
    component: SignUpComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
