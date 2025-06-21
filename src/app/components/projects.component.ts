import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectCard {
  img: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: ProjectCard[] = [
    {
      img: '/assets/projects/project-1.png',
      title: "Bengaluru's Kempegowda International Airport Terminal 2 (T2)",
      description: 'Referred to as the Terminal in a Garden, T2 is a tribute to the Garden City of Bengaluru.',
      link: '/assets/projects/project-1.jpg'
    },
    {
      img: '/assets/projects/project-2.png',
      title: 'Phoenix Aquila',
      description: 'Discover the solution to a drainage ventilation system for a commercial property spread over 26.90 lakhs sq. ft.',
      link: '/assets/projects/project-2.jpg'
    }
  ];
} 