import { Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts-component/contacts-component';
import { HomeComponent } from './components/home-component/home-component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactsComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
