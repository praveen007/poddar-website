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
      img: 'https://www.ashirvad.com/wp-content/uploads/2025/04/Our-latest-Ashirvad-Aqualife-Ads-are-now-LIVE.png',
      title: 'Ashirvad Aqualife TVC Launch: A New Chapter in Water Safety',
      date: 'April 28, 2025',
      link: 'https://www.ashirvad.com/news/ashirvad-aqualife-tvc-launch-a-new-chapter-in-water-safety/'
    },
    {
      img: 'https://www.ashirvad.com/wp-content/uploads/2021/03/Wirelock.jpg',
      title: 'The unique WirelockTM system in uPVC Column Pipes',
      date: 'March 2021',
      link: 'https://www.ashirvad.com/innovation/wirelock-upvc-column-pipes/'
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