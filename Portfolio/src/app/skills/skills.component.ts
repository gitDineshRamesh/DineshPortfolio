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
  {skill:"CSS",level:"80%"},
  {skill:"JavaScript",level:"80%"},
  {skill:"TypeScript",level:"70%"},
  {skill:"Jquery",level:"70%"},
  {skill:"Angular",level:"75%"},
  // {skill:"React",level:"50%"},
  {skill:"Dot Net & C#",level:"75%"},
  // {skill:"Spring Boot & Java",level:"50%"},
  {skill:"SQL Server",level:"75%"},
  {skill:"Docker",level:"60%"},
  {skill:"Git & SVN",level:"70%"},
  // {skill:"RPA UiPath",level:"80%"},
  {skill:"Machine Learning",level:"65%"},
  // {skill:"Kafka, Jenkins & Kubernets ",level:"30%"}
];

}
