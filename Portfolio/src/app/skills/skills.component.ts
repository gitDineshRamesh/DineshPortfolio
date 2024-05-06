import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent{
skillList: any[]=[
  {skill:"HTML",level:"80%"},
  {skill:"CSS",level:"65%"},
  {skill:"JavaScript",level:"70%"},
  {skill:"Jquery",level:"70%"},
  {skill:"Angular",level:"75%"},
  {skill:"React",level:"50%"},
  {skill:"Dot Net & C#",level:"80%"},
  {skill:"Spring Boot & Java",level:"50%"},
  {skill:"SQL Server",level:"80%"},
  {skill:"Docker",level:"50%"},
  {skill:"GitHub VCS & CI/CD",level:"65%"},
  {skill:"RPA UiPath",level:"80%"},
  {skill:"Machine Learning & AI Python",level:"65%"},
  {skill:"Kafka, Jenkins & Kubernets ",level:"30%"}
];

}
