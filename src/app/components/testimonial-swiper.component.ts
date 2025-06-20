import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  img: string;
  name: string;
  text: string;
}

@Component({
  selector: 'app-testimonial-swiper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-swiper.component.html',
  styleUrls: ['./testimonial-swiper.component.scss']
})
export class TestimonialSwiperComponent {
  testimonials: Testimonial[] = [
    {
      img: 'https://www.ashirvad.com/wp-content/uploads/2021/01/Lakshya.jpg',
      name: 'Lakshya',
      text: "I am very proud to be in this company and be a part of 'Hum Ashirvadi'. Everyone here respects our products and it is easy to make clients"
    },
    {
      img: 'https://www.ashirvad.com/wp-content/uploads/2021/01/Lokesh-Sharma.jpg',
      name: 'Lokesh Sharma',
      text: 'I have 12 years of experience and I can proudly say, that I have had the best working experience in my entire journey. I love the challenge, culture, and opportunity I was given'
    },
    {
      img: 'https://www.ashirvad.com/wp-content/uploads/2021/01/Mukesh.jpg',
      name: 'Mukesh Rai',
      text: 'I have been able to capture a big market share of competition with Ashirvad. Every client is really happy and they prefer our products over others'
    },
    {
      img: 'https://www.ashirvad.com/wp-content/uploads/2021/01/Munikeshava.jpg',
      name: 'Munikeshva',
      text: 'I feel so happy to be a part of Ashirvad as they always make you feel a part of the team. I have learned so much here and I am proud to be a part of Ashirvad Team'
    },
    {
      img: 'https://www.ashirvad.com/wp-content/uploads/2021/01/Naresh-Kumar-1.jpg',
      name: 'Naresh Kumar',
      text: "I joined Ashirvad in 2017, I love three things about Ashirvad, 'Priority to its customers, unparalleled quality products, and the culture that supports its people. I love the company'"
    },
    {
      img: 'https://www.ashirvad.com/wp-content/uploads/2021/01/Nitin-3.jpg',
      name: 'Nitin Lavekar',
      text: 'I have been with the company for the past 15 years and it has given me wealth, prosperity, and respect in the market. I was able to travel internationally for the first time; thank you Ashirvad'
    }
  ];

  currentIndex = 0;

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.testimonials.length - 1;
    }
  }

  next() {
    if (this.currentIndex < this.testimonials.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
} 