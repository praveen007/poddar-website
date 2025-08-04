import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerSectionComponent } from './banner-section.component';
import { MissionVisionSectionComponent } from './mission-vision-section.component';
import { ProductsTabsSectionComponent } from './products-tabs-section.component';
import { GallerySectionComponent } from './gallery-section.component';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [
    CommonModule,
    BannerSectionComponent,
    MissionVisionSectionComponent,
    ProductsTabsSectionComponent,
    GallerySectionComponent
  ],
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent {
  banner = {
    leftTitle: 'Ashirvad - A Legacy of Trust',
    leftText: 'Ashirvad Pipes has been the benchmark of quality in the Indian water management industry since 1998. We adhere to the highest international standards set for manufacturing products for potable water supply through smart solutions and intelligent technologies that ensure sustainability and convenience.',
    rightTitle: 'Aliaxis - A Reputation for Excellence',
    rightText: 'Headquartered in Belgium, Aliaxis has earned the distinction of providing the finest integrated & sustainable fluid handling systems across the globe. Our best practices include deploying environment-friendly technology, using non-toxic raw material, and reducing the carbon footprint in a conscious and conscientious way. Our group is deeply committed to grow Ashirvad Pipes in India.',
    logo: 'assets/poddar/poddar-logo-new.png'
  };

  missionVisionCards = [
    {
      img: 'assets/about/our-vision.svg',
      title: 'Our Vision',
      text: 'Be the most admired company in our category for customer intimacy, innovative products, solutions and practices, best-in-class commercial and operational excellence, and people practices that make us the "best place to work".'
    },
    {
      img: 'assets/about/our-mission.svg',
      title: 'Our Mission',
      text: 'We endeavor to become a preferred employer among high caliber professionals hailing from all walks of life. We expect and empower our teams to lend their thoughts and share their myriad experiences to enrich the social fabric of the organisation for a long time to come.'
    }
  ];

  productTabs = [
    {
      label: 'Building',
      img: 'assets/products/building.jpg',
      text: 'We specialize in designing and manufacturing modern plumbing, sanitary, and drainage solutions for hot and cold water applications for use in residential, commercial projects.'
    },
    {
      label: 'Agriculture',
      img: 'assets/products/agriculture.jpg',
      text: 'We build responsible water management solutions that can unlock higher crop yields, better harvest, and efficient resource productivity for prolonged use.'
    },
    {
      label: 'Industry',
      img: 'assets/products/industry.jpg',
      text: 'We employ sophisticated fluid management, air distribution systems, and a range of thermoplastic piping systems that can be used for a variety of industrial applications.'
    },
    {
      label: 'Infrastructure',
      img: 'assets/products/infrastructure.jpg',
      text: 'We provide scalable solutions for sewage regulation, equitable water distribution and preservation that can create conscious, sustainable change in communities and commerce.'
    }
  ];

  galleryImages = [
    { src: 'assets/gallery/1.jpg', alt: 'ashirvad pvc pipe manufacturing plant' },
    { src: 'assets/gallery/2.jpg', alt: 'Ashirvad pipe manufacturing plant' },
    { src: 'assets/gallery/3.jpg', alt: 'Ashirvad pvc pipe machine' },
    { src: 'assets/gallery/4.jpg', alt: 'Ashirvad pvc pipe manufacturing machine' },
    { src: 'assets/gallery/5.jpg', alt: 'Ashirvad pipe manufacturing machine' },
    { src: 'assets/gallery/6.jpg', alt: 'Ashirvad piping plant environment' },
    { src: 'assets/gallery/7.jpg', alt: 'ashirvad pvc pipe plant' },
    { src: 'assets/gallery/8.jpg', alt: '' },
    { src: 'assets/gallery/9.jpg', alt: '' },
    { src: 'assets/gallery/10.jpg', alt: '' }
  ];
} 