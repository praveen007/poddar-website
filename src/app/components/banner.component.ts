import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BannerSlide {
  img: string;
  imgMobile?: string;
  alt: string;
  heading?: string;
}

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  slides: BannerSlide[] = [
    {
      img: 'https://www.ashirvad.com/wp-content/uploads/2025/05/25-128_Ashirvad-DigitalAdapts_v2_2732x1300px_1Rev-scaled.jpg',
      imgMobile: 'https://www.ashirvad.com/wp-content/uploads/2025/05/25-128_Ashirvad-DigitalAdapts_v2_720x1210px_1Rev.jpg',
      alt: 'Digital Adapts 1',
      heading: ''
    },
    {
      img: 'https://www.ashirvad.com/wp-content/uploads/2025/05/25-128_Ashirvad-DigitalAdapts_v2_2732x1300px_2Rev-scaled.jpg',
      imgMobile: 'https://www.ashirvad.com/wp-content/uploads/2025/05/25-128_Ashirvad-DigitalAdapts_v2_720x1210px_2Rev.jpg',
      alt: 'Digital Adapts 2',
      heading: ''
    },
    {
      img: 'https://www.ashirvad.com/wp-content/uploads/2024/08/Banner-5-1.png',
      imgMobile: 'https://www.ashirvad.com/wp-content/uploads/2024/08/Mobile-Ashirvad-Banner-5.png',
      alt: 'Banner 5',
      heading: ''
    },
    {
      img: 'https://www.ashirvad.com/wp-content/uploads/2021/01/Banner-3.1.jpg',
      alt: 'Water Piping Technology',
      heading: 'Spearheading research. Leading change.'
    },
    {
      img: 'https://www.ashirvad.com/wp-content/uploads/2024/07/website-5.png',
      imgMobile: 'https://www.ashirvad.com/wp-content/uploads/2024/07/Mobile-4.png',
      alt: 'Water Piping Technology',
      heading: "Don't just buy a tank. Buy the future."
    },
    {
      img: 'https://www.ashirvad.com/wp-content/uploads/2024/07/Ashirvad-Banner-4-1.png',
      imgMobile: 'https://www.ashirvad.com/wp-content/uploads/2024/07/Mobile-Ashirvad-Banner-4-1.jpg',
      alt: 'Ashirvad Banner 4',
      heading: ''
    }
  ];

  currentIndex = 0;

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - 1;
    }
  }

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
} 