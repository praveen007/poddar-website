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
      image: 'assets/building.jpg',
      description: [
        'We specialize in designing modern sanitary and drainage solutions.',
        'We are also the top manufacturer of plumbing pipes for hot and cold water application in residential, commercial projects.'
      ],
      actionText: 'View Solutions',
      actionUrl: '/solutions/building'
    },
    {
      name: 'Agriculture',
      image: 'assets/agriculture.jpg',
      description: [
        'Our agriculture pipe systems are built for efficiency.',
        'Durable under varied field conditions.'
      ],
      actionText: 'View Solutions',
      actionUrl: '/solutions/agriculture'
    },
    {
      name: 'Industrial',
      image: 'assets/industrial.jpg',
      description: [
        'Robust piping for industrial flow systems.',
        'Trusted across manufacturing sectors.'
      ],
      actionText: 'View Solutions',
      actionUrl: '/solutions/industrial'
    }
  ];

  activeIndex = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }
}
