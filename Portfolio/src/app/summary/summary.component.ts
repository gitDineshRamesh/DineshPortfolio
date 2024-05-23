import { Component } from '@angular/core';
import { UtilsModule } from '../utils/utils.module';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [UtilsModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
Title:string = `SUMMARY`;
details:string = `As a Full Stack Developer with 2.4 years of experience, 
I have a strong background in Java, Spring boot, Docker, Kafka basics,
Kubernetes basics, Jenkins basics, Git hub,  C#, Advanced JavaScript,
Angular, React, HTML, AJAX, Telekrik KendoUI, SQL, and DevOps.
My passion for learning and ability to quickly grasp key concepts 
has helped me stay on top of the latest trends and technologies, 
including Machine Learning and AI integration in Spring boot, 
Java, .NET, C#, React, Angular and Python Flask applications. 
Additionally, my expertise in RND allows me to solve problems 
quickly and efficiently. As a team player, 
I value building strong relationships with my colleagues and
am always willing to share my knowledge through effective knowledge transfer. `;
}
