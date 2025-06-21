import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

export interface ProductTab {
  name: string;
  image: string;
  description: string[];
  actionText: string;
  actionUrl: string;
}


@Component({
  selector: 'app-product-tabs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-tabs.component.html',
  styleUrls: ['./product-tabs.component.scss'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(-10px)' }))
      ])
    ])
  ]
})
export class ProductTabsComponent {
  tabs = [
    {
      name: 'Building',
      image: 'assets/products/building.jpg',
      description: [
        'We specialize in designing modern sanitary and drainage solutions.',
        'We are also the top manufacturer of plumbing pipes for hot and cold water application in residential, commercial projects.'
      ],
      actionText: 'View Solutions',
      actionUrl: '/solutions/building'
    },
    {
      name: 'Agriculture',
      image: 'assets/products/agriculture.jpg',
      description: [
        'We build responsible water management solutions that can unlock higher crop yields, better harvest, and efficient resource productivity for prolonged use.'
      ],
      actionText: 'View Solutions',
      actionUrl: '/solutions/agriculture'
    },
    {
      name: 'Industrial',
      image: 'assets/products/industry.jpg',
      description: [
        'We employ sophisticated fluid management, air distribution systems, and a range of thermoplastic piping systems that can be used for a variety of industrial applications.'
      ],
      actionText: 'View Solutions',
      actionUrl: '/solutions/industry'
    },
    {
      name: 'Infrastructure',
      image: 'assets/products/infrastructure.jpg',
      description: [
        'We provide scalable solutions for sewage regulation, equitable water distribution and preservation that can create conscious, sustainable change in communities and commerce.'
      ],
      actionText: 'View Solutions',
      actionUrl: '/solutions/infrastructure'
    }
  ];

  activeIndex = 0;
  expandedAccordion: number | null = null;

  setActive(index: number) {
    this.activeIndex = index;
  }

  toggleAccordion(index: number) {
    this.expandedAccordion = this.expandedAccordion === index ? null : index;
  }
}
