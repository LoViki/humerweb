import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { EmployeeComponent } from './employee-component/employee-component';
import { AboutComponent } from './about-component/about-component';
    
export const routes: Routes = [
    { path: '', component: HomeComponent }, //ha nem írok semmit a 4200 után, akkor is jöjjön be a home (főoldal)
    { path: 'home', component: HomeComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'about', component: AboutComponent },
];
