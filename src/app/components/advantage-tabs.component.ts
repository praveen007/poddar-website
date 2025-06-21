import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AdvantageTab {
  icon: string;
  title: string;
  content: string;
  backgroundImage: string;
}

@Component({
  selector: 'app-advantage-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advantage-tabs.component.html',
  styleUrls: ['./advantage-tabs.component.scss']
})
export class AdvantageTabsComponent {
  tabs: AdvantageTab[] = [
    {
      icon: 'https://www.ashirvad.com/wp-content/uploads/2021/01/quality-assurance.svg',
      title: 'Quality Assurance',
      content: 'Our commitment to quality is unwavering. Every product undergoes rigorous testing and quality checks to ensure it meets the highest standards. We maintain strict quality control processes throughout the manufacturing cycle, from raw material selection to final product delivery.',
      backgroundImage: 'assets/advantage/quality-assurance.png'
    },
    {
      icon: 'https://www.ashirvad.com/wp-content/uploads/2021/01/revolutionary-technology.svg',
      title: 'Revolutionary Technology',
      content: 'We leverage cutting-edge technology and innovative manufacturing processes to create superior plumbing solutions. Our advanced production facilities and state-of-the-art equipment enable us to deliver products that exceed industry standards and customer expectations.',
      backgroundImage: 'assets/advantage/revolutionary-technology.png'
    },
    {
      icon: 'https://www.ashirvad.com/wp-content/uploads/2021/01/sustainable.svg',
      title: 'Sustainable',
      content: 'Environmental responsibility is at the core of our business. We develop eco-friendly products and sustainable manufacturing practices that minimize environmental impact while maximizing efficiency and performance for our customers.',
      backgroundImage: 'assets/advantage/sustainable.png'
    },
    {
      icon: 'https://www.ashirvad.com/wp-content/uploads/2021/01/innovation.svg',
      title: 'Innovation',
      content: 'Continuous innovation drives our success. We invest heavily in research and development to create breakthrough solutions that address evolving market needs and provide superior value to our customers.',
      backgroundImage: 'assets/advantage/innovation.png'
    }
  ];

  activeTab = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }
} 