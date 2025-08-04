import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-poddar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-poddar.component.html',
  styleUrls: ['./why-poddar.component.scss']
})
export class WhyPoddarComponent implements OnInit {

  cultureValues = [
    {
      icon: 'assets/why-poddar/collaborative-leadership.svg',
      title: 'Collaborative Leadership',
      points: [
        'We cherish & nurture customer relationships',
        'We draw strength from collaboration & dialogue',
        'We create synergies for long-term prosperity'
      ]
    },
    {
      icon: 'assets/why-poddar/relentless-innovation.svg',
      title: 'Relentless Innovation',
      points: [
        'We persist in the face of challenges',
        'We innovate to create lasting change',
        'We deliver simple and innovative solutions'
      ]
    },
    {
      icon: 'assets/why-poddar/conscientious-growth.svg',
      title: 'Conscientious Growth',
      points: [
        'We invest in stakeholder empowerment',
        'We believe in sustainable value creation',
        'We strive to improve the quality of life'
      ]
    }
  ];

  purposeVisionMission = [
    {
      title: 'Our Purpose',
      content: 'We believe that engaging in a variety of perspectives has the power of transforming the world. At Poddar, we attract, nurture, and uphold diversity of age, religion, gender, disability, education, and country of origin across all functions of our organization. Our doors are open for all.',
      image: 'assets/why-poddar/our-purpose.jpg',
      imageFirst: false
    },
    {
      title: 'Our Vision',
      content: 'We aspire to create an inclusive environment for growth and well-being of all our stakeholders. We strive to build a diverse ecosystem where everyone is valued, respected, and celebrated for their contributions to the company\'s success.',
      image: 'assets/why-poddar/our-vision.png',
      imageFirst: true
    },
    {
      title: 'Our Mission',
      content: 'We endeavour to become a preferred employer among high-caliber professionals hailing from all walks of life. We expect and empower our teams to lend their thoughts and share their myriad experiences to enrich the social fabric of the organization for a long time to come.',
      image: 'assets/why-poddar/our-mission.jpg',
      imageFirst: false
    }
  ];

  greatPlaceToWork = {
    title: 'Great Place to Work 2020, 2021, 2022 and 2023',
    content: 'We are proud to announce that Poddar has been certified as a Great Place To Work for four consecutive years: FY 2020-21, FY 2021-22, FY 2022-23 and FY 2023-24. Poddar Pipes brings together skilled professionals to develop innovative and sustainable plastic piping solutions that enhance everyday life.',
    image: 'assets/why-poddar/GPTW.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }

} 