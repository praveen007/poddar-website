import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerSectionComponent } from './components/banner-section.component';
import { TechnicalCalculationComponent } from './components/technical-calculation.component';
import { BimCadComponent } from './components/bim-cad.component';
import { SpecificationAdviceComponent } from './components/specification-advice.component';
import { DesignSupportComponent } from './components/design-support.component';

@Component({
  selector: 'app-design-specifications-page',
  standalone: true,
  imports: [
    CommonModule,
    BannerSectionComponent,
    TechnicalCalculationComponent,
    BimCadComponent,
    SpecificationAdviceComponent,
    DesignSupportComponent
  ],
  template: `
    <app-banner-section [data]="bannerData"></app-banner-section>
    <app-technical-calculation [data]="technicalCalculationData"></app-technical-calculation>
    <app-bim-cad [data]="bimCadData"></app-bim-cad>
    <app-specification-advice [data]="specificationAdviceData"></app-specification-advice>
    <app-design-support [data]="designSupportData"></app-design-support>
  `,
  styleUrls: ['./design-specifications-page.component.scss']
})
export class DesignSpecificationsPageComponent implements OnInit {
  
  bannerData = {
    title: 'Design and Specification',
    description: 'At Ashirvad, we provide superior technical expertise, design novel concepts and impart on-the-ground project understanding to envisage and install optimized plumbing and drainage solutions across industries.',
    backgroundImage: 'assets/design-specifications/design-and-specifications-banner.jpg',
    breadcrumbs: [
      { label: 'Services & Offerings', link: '/services' },
      { label: 'Design & Specification', active: true }
    ]
  };

  technicalCalculationData = {
    title: 'Technical Calculation Tools',
    description: 'Our guiding premise is simple; all plumbing solutions must save water, money, and effort during installation and over the life of the construction. However, building a perfect system involves the consideration of many moving parts. Try our technical calculator to derive an approximate assessment of upcoming project costs.',
    ctaText: 'Calculator Tool',
    ctaLink: '/calculator-tools',
    imageSrc: 'assets/design-specifications/technical_calculation_tools.jpg',
    imageAlt: 'Technical Calculation Tools'
  };

  bimCadData = {
    title: 'BIM & CAD',
    description: 'Our Digital BIM library is considered a path-breaking technology in the piping and hardware industry. The virtual rendition of a building product in a 3D format helps technicians and engineers visualize installation, effectiveness, efficiency on the screen itself. This revolutionary tool also enables stakeholders to import various external BIM objects from several archives and online libraries that are available to allow for a versatile, yet accurate project planning experience.',
    ctaText: 'BIM Library',
    ctaLink: 'https://bim.ashirvad.com/',
    imageSrc: 'assets/design-specifications/bim-and-cad.jpg',
    imageAlt: 'BIM and CAD'
  };

  specificationAdviceData = {
    title: 'Specification Advice',
    description: 'Over the last two decades, we\'ve observed and executed creative plumbing solutions that are better optimized for specific service environments and weather conditions. Tap into our differentiated critical engineering services and leverage our expertise to enhance performance, reduce costs and increase the longevity of any plumbing system.',
    ctaText: 'Contact our Specification Experts',
    ctaLink: '/contact-us',
    imageSrc: 'assets/design-specifications/specification-advice.jpg',
    imageAlt: 'Specification Advice'
  };

  designSupportData = {
    title: 'Design Support',
    description: 'When it comes to project planning and design execution, we like to lead from the front. Our team of seasoned experts view your water management challenges from a fresh lens and offer long-lasting, optimized solutions that enhance performance and deliver better yields. We provide differentiated support across the entire product lifecycle and deliver excellence that goes beyond mere metrics!',
    ctaText: 'Contact our Design Experts',
    ctaLink: '/contact-us',
    imageSrc: 'assets/design-specifications/design-support.jpg',
    imageAlt: 'Design Support'
  };

  constructor() {}

  ngOnInit(): void {
    // Initialize any required data or services
  }
} 