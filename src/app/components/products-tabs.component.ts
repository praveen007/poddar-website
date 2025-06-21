import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProductTab {
  label: string;
  img: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-products-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-tabs.component.html',
  styleUrls: ['./products-tabs.component.scss']
})
export class ProductsTabsComponent {
  tabs: ProductTab[] = [
    {
      label: 'Building',
      img: 'assets/building.jpg',
      description: 'We specialize in designing modern sanitary and drainage solutions. We are also the top manufacturer of plumbing pipes for hot and cold water application in residential, commercial projects.',
      link: 'https://www.ashirvad.com/building/'
    },
    {
      label: 'Agriculture',
      img: 'assets/agriculture.jpg',
      description: 'We build responsible water management solutions that can unlock higher crop yields, better harvest, and efficient resource productivity for prolonged use.',
      link: 'https://www.ashirvad.com/agriculture/'
    },
    {
      label: 'Industrial',
      img: 'assets/industry.jpg',
      description: 'We employ sophisticated fluid management, air distribution systems, and a range of thermoplastic piping systems that can be used for a variety of industrial applications.',
      link: 'https://www.ashirvad.com/industrial/'
    },
    {
      label: 'Infrastructure',
      img: 'assets/infrastructure.jpg',
      description: 'We provide scalable solutions for sewage regulation, equitable water distribution and preservation that can create conscious, sustainable change in communities and commerce.',
      link: 'https://www.ashirvad.com/infrastructure/'
    }
  ];

  selectedTab = 0;
  expandedAccordion: number | null = null;

  selectTab(index: number) {
    this.selectedTab = index;
  }

  toggleAccordion(index: number) {
    this.expandedAccordion = this.expandedAccordion === index ? null : index;
  }
} 