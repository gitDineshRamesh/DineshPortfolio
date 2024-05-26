import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [

    {path:"", redirectTo:"dashboard", pathMatch:"full" },
    {path:"dashboard", loadComponent:()=>import('./dashboard/dashboard.component').then(c=>c.DashboardComponent)},
    {path:"summary", loadComponent:()=>import('./summary/summary.component').then(c=>c.SummaryComponent)},
    {path:"experience", loadComponent:()=>import('./experience/experience.component').then(c=>c.ExperienceComponent)},
    {path:"skills", loadComponent:()=>import('./skills/skills.component').then(c=>c.SkillsComponent)},
    {path:"contact", loadComponent:()=>import('./contact/contact.component').then(c=>c.ContactComponent)},
];
