import { Routes } from '@angular/router';

import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';
import { ServicesPage } from './pages/services/services.page';
import { WorkPage } from './pages/work/work.page';
import { ContactPage } from './pages/contact/contact.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'services', component: ServicesPage },
  { path: 'work', component: WorkPage },
  { path: 'contact', component: ContactPage },
  { path: '**', redirectTo: '' }
];
