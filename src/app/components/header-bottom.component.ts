import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavDropdownComponent, NavDropdownItem } from './nav-dropdown.component';
import { MegaMenuComponent, MegaMenuColumn, MegaMenuItem } from './mega-menu.component';

@Component({
  selector: 'app-header-bottom',
  standalone: true,
  imports: [CommonModule, NavDropdownComponent, MegaMenuComponent],
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.scss']
})
export class HeaderBottomComponent {
  openDropdown: string | null = null;

  aboutItems: NavDropdownItem[] = [
    { label: 'Who we are', href: 'https://www.ashirvad.com/who-we-are/' },
    { label: 'Why Ashirvad', href: 'https://www.ashirvad.com/about-us-why-ashirvad/' },
    { label: 'Our Partners', href: 'https://www.ashirvad.com/partners-and-growth/' },
    { label: 'Our Accomplishments', href: 'https://www.ashirvad.com/about-award-achievement/' },
    { label: 'Our Leadership', href: 'https://www.ashirvad.com/our-leadership/' }
  ];
  servicesItems: NavDropdownItem[] = [
    { label: 'Design & Specification', href: 'https://www.ashirvad.com/design-and-specifications/' },
    { label: 'Installation & Training', href: 'https://www.ashirvad.com/installation-and-services/' }
  ];
  careersItems: NavDropdownItem[] = [
    { label: 'Life at Ashirvad', href: 'https://www.ashirvad.com/life-at-ashirvad/' },
    { label: 'Opportunities', href: 'https://aliaxis.wd3.myworkdayjobs.com/Aliaxis_IndiaAshirvad1', target: '_blank' },
    { label: 'Why Ashirvad', href: 'https://www.ashirvad.com/why-ashirvad/' }
  ];
  resourcesItems: NavDropdownItem[] = [
    { label: 'Blogs', href: 'https://www.ashirvad.com/blogs/' },
    { label: 'Case studies', href: 'https://www.ashirvad.com/case-study/' },
    { label: 'Downloads', href: 'https://www.ashirvad.com/downloads/' }
  ];

  productsColumns: MegaMenuItem[] = [
  {
    category: 'Plumbing Pipes and Fittings',
    items: [
      { title: 'CPVC Range (Hot and Cold)', url: '/cpvc', image: 'assets/OPVC-Pipe-Cluster-Image_Edit.png' },
      { title: 'UPVC Range (Cold Water)', url: '/upvc', image: 'assets/OPVC-Pipe-Cluster-Image_Edit.png' },
      { title: 'UPVC Range (Cold Water)', url: '/upvc', image: 'assets/OPVC-Pipe-Cluster-Image_Edit.png' },
      { title: 'UPVC Range (Cold Water)', url: '/upvc', image: 'assets/OPVC-Pipe-Cluster-Image_Edit.png' },
      { title: 'UPVC Range (Cold Water)', url: '/upvc', image: 'assets/OPVC-Pipe-Cluster-Image_Edit.png' },

    ]
  },
  {
    category: 'Agriculture Pipes and Fittings',
    items: [
      { title: 'Irrigation Pipes', url: '/irrigation' }
    ]
  }
];
  
  // [
  //   {
  //     heading: 'CPVC Range (Hot and Cold)',
  //     items: [
  //       {
  //         label: 'Ashirvad FlowGuard-Plus® CPVC',
  //         href: 'https://www.ashirvad.com/solution/cpvc-pipes-fittings/',
  //         img: 'https://www.ashirvad.com/wp-content/uploads/2021/04/CPVC_FlowGuard-Plus_Cluster-1.png'
  //       }
  //     ]
  //   }
  //   // Add more columns as needed
  // ];

  

  openMenu(name: string) { this.openDropdown = name; }
  closeMenu() { this.openDropdown = null; }
  toggleMenu(name: string) { this.openDropdown = this.openDropdown === name ? null : name; }

  get isMobile() { return window.innerWidth <= 900; }
} 