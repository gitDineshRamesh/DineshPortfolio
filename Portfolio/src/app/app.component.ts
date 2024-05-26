import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component'
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { snow } from './snow.component';
import { SummaryComponent } from "./summary/summary.component";
import { ExperienceComponent } from "./experience/experience.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DashboardComponent,
       NavigationBarComponent, snow, 
       SummaryComponent, ExperienceComponent, 
       SkillsComponent, ContactComponent, NgIf]
})
export class AppComponent {
  title = 'Portfolio';
}
