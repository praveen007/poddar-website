import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Award {
  title: string;
  description: string;
  img: string;
}

@Component({
  selector: 'app-awards-swiper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './awards-swiper.component.html',
  styleUrls: ['./awards-swiper.component.scss']
})
export class AwardsSwiperComponent {
  awards: Award[] = [
    {
      title: 'NABL Accreditation',
      description: 'ISO 17025 accreditation granted to Aliaxis Research and Technology Center Asia Laboratory in India by GoI',
      img: 'assets/awards/nabl.png'
    },
    {
      title: 'Export Excellence Award 2022',
      description: "FKCCI Export Excellence Silver Award for 'Best Manufacturer Exporter - Large Scale Industry' Category",
      img: 'assets/awards/export-excellence.png'
    },
    {
      title: 'Great Place to Work Certification',
      description: 'Certified as a Great Place To Work for all three years of participation (FY 2020–21, 2021–22, 2022–23)',
      img: 'assets/awards/great-place.png'
    },
    {
      title: 'WCRC Leaders Summit 2014',
      description: "Adjudged as 'One of the 100 fastest growing marketing brands in Asia' by KPMG in 2014.",
      img: 'assets/awards/wcrc.png'
    },
    {
      title: 'National Award',
      description: "Prime Minister's Award for 'Outstanding Entrepreneurship in Medium Enterprises' for the year 2007.",
      img: 'assets/awards/national-award.png'
    }
  ];

  currentIndex = 0;

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.awards.length - 1) {
      this.currentIndex++;
    }
  }
} 