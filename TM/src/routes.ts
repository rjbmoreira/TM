import { Routes } from '@angular/router';
import { SectionOverviewComponent } from './app/sections/section-overview/section-overview.component';
import { SectionRegisterComponent } from './app/sections/section-register/section-register.component';

export const appRoutes: Routes = [
{ path: 'register', component: SectionRegisterComponent },
{ path: 'overview', component: SectionOverviewComponent },
{ path: '', redirectTo: '/overview', pathMatch: 'full' }

];