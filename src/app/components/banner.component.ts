import { Component, OnInit } from '@angular/core';
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
export class BannerComponent implements OnInit {
  slides: BannerSlide[] = [
    {
      img: 'assets/banner/banner-1.jpg',
      //imgMobile: 'https://www.ashirvad.com/wp-content/uploads/2025/05/25-128_Ashirvad-DigitalAdapts_v2_720x1210px_2Rev.jpg',
      alt: 'Digital Adapts 2',
      heading: ''
    },
    {
      img: 'assets/banner/banner-2.jpg',
      imgMobile: 'https://www.ashirvad.com/wp-content/uploads/2024/08/Mobile-Ashirvad-Banner-5.png',
      alt: 'Banner 5',
      heading: ''
    },
    {
      img: 'assets/banner/banner-3.png',
      alt: 'Water Piping Technology',
      heading: 'Spearheading research. Leading change.'
    },
    {
      img: 'assets/banner/banner-5.jpg',
      //imgMobile: 'https://www.ashirvad.com/wp-content/uploads/2024/07/Mobile-4.png',
      alt: 'Water Piping Technology',
      heading: "Don't just buy a tank. Buy the future."
    },
    {
      img: 'assets/banner/banner-4.png',
      //imgMobile: 'https://www.ashirvad.com/wp-content/uploads/2024/07/Mobile-Ashirvad-Banner-4-1.jpg',
      alt: 'Ashirvad Banner 4',
      heading: ''
    }
  ];

  currentIndex = 0;

  ngOnInit() {
    // Component initialized
  }

  onImageLoad(event: Event, imgSrc: string) {
    console.log('Image loaded successfully:', imgSrc);
  }

  onImageError(event: Event, imgSrc: string) {
    console.error('Image failed to load:', imgSrc);
  }

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