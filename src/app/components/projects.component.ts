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
      img: 'https://www.ashirvad.com/wp-content/uploads/2023/06/t2.jpg',
      title: "Bengaluru's Kempegowda International Airport Terminal 2 (T2)",
      description: 'Referred to as the Terminal in a Garden, T2 is a tribute to the Garden City of Bengaluru.',
      link: 'https://www.ashirvad.com/project/bengalurus-kempegowda-international-airport-terminal-2-t2/'
    },
    {
      img: 'https://www.ashirvad.com/wp-content/uploads/2021/03/Thumbnail-2-Phoenix-Embassy-Equila.jpg',
      title: 'Phoenix Aquila',
      description: 'Discover the solution to a drainage ventilation system for a commercial property spread over 26.90 lakhs sq. ft.',
      link: 'https://www.ashirvad.com/project/phoenix-aquila/'
    }
  ];
} 