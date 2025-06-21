import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InnovationCard {
  img: string;
  title: string;
  date: string;
  link: string;
}

@Component({
  selector: 'app-innovations-swiper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './innovations-swiper.component.html',
  styleUrls: ['./innovations-swiper.component.scss']
})
export class InnovationsSwiperComponent {
  innovations: InnovationCard[] = [
    {
      img: 'assets/innovation/innovation-1.png',
      title: 'Ashirvad Aqualife TVC Launch: A New Chapter in Water Safety',
      date: 'April 28, 2025',
      link: '#'
    },
    {
      img: 'assets/innovation/innovation-2.png',
      title: 'The unique WirelockTM system in uPVC Column Pipes',
      date: 'March 2021',
      link: '#'
    }
  ];

  currentIndex = 0;

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.innovations.length - 1;
    }
  }

  next() {
    if (this.currentIndex < this.innovations.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
} 