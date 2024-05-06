import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
experienceDetails: any[]=[
  {
    header:".Net Developer",
    details:`Total eBiz Solutions Pte. Ltd. January 2022 - December 2023, Bangalore, India.* Demonstrated expertise in .Net and RPA, successfully troubleshooting issues, analyzing data, and developing creative solutions. * Spearheaded proof-of-conceptes in both .Net and RPA, showcasing a willingness to learn and experiment with emerging technologies.
    * Simultaneously managed multiple projects, successfully meeting deadlines and delivering quality results. * Developed
    exceptional interpersonal skills, fostering positive relationships with customers, managers, and end-users alike. *
    Contributed to highly complex projects, collaborating with cross-functional teams to ensure success.`
  },
  {
    header:"Spring Boot Developer",
    details:`Pratishthan Software Venture January 2024 - Present, Bangalore, India.* Demonstrated expertise in Spring Boot, Maven, JPA, Hibernate, Docker, Github, Jfrog, Kafka, Jenkins and Kubernets for  successfully troubleshooting issues, creating Test cases with JUnit and Cucumber and Version Control with Git.`
  },
  {
    header:"ML Intership",
    details:`Techvolt Software Pvt Ltd. March 2022 - May 2022, Coimbatore, India.* It was a good experience as an intern at Techvolt. Received certiﬁcation for completing machine learning.`
  }


  ];
}
