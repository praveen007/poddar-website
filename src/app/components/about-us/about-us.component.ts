import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from './info-card.component';
import { InnovationCardComponent } from './innovation-card.component';
import { FeatureCardComponent } from './feature-card.component';
import { BannerSectionComponent } from './banner-section.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, InfoCardComponent, InnovationCardComponent, FeatureCardComponent, BannerSectionComponent],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  bannerTitle = 'Why Ashirvad';
  bannerDescription = 'Ashirvad Pipes under Aliaxis group is the pioneer of Indian water management industry and has been a benchmark for quality since 1998. We adhere to the highest international standards for manufacturing of products for potable water supply, working jointly with  global partners. Our long lasting and smart solutions coupled with state of the art technology provide sustainable and convenient solutions.';
  bannerImage = 'assets/banner/banner-1.jpg';

  infoCards = [
    {
      icon: 'assets/advantage/innovation.png',
      title: 'We invest in people',
      detail: 'At Ashirvad, we believe in forging strong bonds of trust and collaboration that can create shared growth. We always take care of our people, be it individual contractors, dealers or customers.'
    },
    {
      icon: 'assets/advantage/quality-assurance.png',
      title: 'We believe in Quality',
      detail: 'There is no substitute for hard work and excellent quality. At Ashirvad, we create high quality products that allow for ease of use and convenience for generations to come. We have a time-tested penchant for quality that lasts.'
    },
    {
      icon: 'assets/advantage/revolutionary-technology.png',
      title: 'We have a penchant for Innovation',
      detail: 'Human progress at the forefront of everything we do at Ashirvad. We\'re constantly innovating and pushing the envelope to bring new products to market which makes life easier.'
    },
    {
      icon: 'assets/advantage/quality-assurance.png',
      title: 'Delivering Consistent Quality',
      detail: 'Water is the most basic of all fundamental human rights. At Ashirvad, we have endeavored to create systems that not only increase the efficiency of water and waste management, but also elevate the quality of human life. Excellence is a habit we practice daily!'
    },
    {
      icon: 'assets/advantage/sustainable.png',
      title: 'Enriching the Local Community',
      detail: 'Our extended community of plumbers, dealers and MEP contractors are the torch-bearers for our continued success over the last 25 years. We take pride in their efforts and work towards catalyzing their progress everyday!'
    }
  ];

  innovations = [
    {
      img: 'assets/innovation/innovation-1.png',
      alt: 'Ashirvad wirelock',
      title: 'The unique WirelockTM system in uPVC Column Pipes',
      text: 'In the unique WireLockTM system pioneered and patented by Ashirvad Pipes, the coupler is fitted to the pipe and locked with a special stainless steel wire. This jointing method eliminates the incidence of coupler loosening and column slipping during the dismantling and/or installation process. The WirelockTM system further prevents excessive tightening of the coupler with the pipe.'
    },
    {
      img: 'assets/innovation/innovation-2.png',
      alt: 'ISI Certified pipes',
      title: 'Being the first to receive the ISI certification for CPVC pipes in the country',
      text: 'We use NSF certified TempRite¬ 88619/88096 TAN 309/311 CPVC material from Lubrizol USA, inventors of CPVC technology. Our finished products are regularly lab tested in Europe & USA. They have been tested, approved and used in India in the highest number of projects for over 10 years.'
    },
    {
      img: 'assets/innovation/innovation-1.png',
      alt: 'Yellow seal pipes',
      title: 'Introducing Pushfit technology in SWR pipes for the first time in India',
      text: 'Ashirvad SWR Pushfit pipes don\'t require threading or solvent adhesive during installation. The Pushfit system is joined by simply pushing the spigot end into the socket end. Our comprehensive range of soil and waste solutions offer unrivalled installation options, high quality finish, superior technology and are suitable for all types of commercial and domestic installations.'
    },
    {
      img: 'assets/innovation/innovation-2.png',
      alt: 'India first co-moulded yellow seal technology',
      title: 'Introduction of Yellow SealTM Technology in SWR Pushfit pipes',
      text: 'Ashirvad SWR Pushfit piping systems include an extensive range of Soil, Waste, and Rainwater Plumbing products that are manufactured with the revolutionary pre-fitted rubber (Yellow Seal™) technology. The advanced Yellow Seal™ enables leak-proof joints that can withstand high pressure and accommodate thermal expansion and contraction of plastic.'
    }
  ];

  features = [
    {
      icon: 'assets/advantage/innovation.png',
      header: '#01',
      text: 'state of the art manufacturing facility'
    },
    {
      icon: 'assets/advantage/quality-assurance.png',
      header: '#02',
      text: 'Advanced machinery for superior quality'
    },
    {
      icon: 'assets/advantage/revolutionary-technology.png',
      header: '#03',
      text: 'Advanced material handling system'
    },
    {
      icon: 'assets/advantage/quality-assurance.png',
      header: '#04',
      text: '100% incoming raw material inspection'
    },
    {
      icon: 'assets/advantage/sustainable.png',
      header: '#05',
      text: 'High dimensional accuracy to maintain quality of each piece to ensure a defect free system'
    },
    {
      icon: 'assets/advantage/innovation.png',
      header: '#06',
      text: 'Stringent quality checks at every level of production'
    },
    {
      icon: 'assets/advantage/quality-assurance.png',
      header: '#07',
      text: '100% finished goods quality inspection'
    },
    {
      icon: 'assets/advantage/revolutionary-technology.png',
      header: '#08',
      text: 'Multiple quality checks for every Aqualife brass fitting that leaves the Ashirvad factory.'
    },
    {
      icon: 'assets/advantage/quality-assurance.png',
      header: '#09',
      text: 'Every batch of products lab tested'
    },
    {
      icon: 'assets/advantage/sustainable.png',
      header: '#10',
      text: 'Regular external lab testing of products in U.S.A, France and India'
    }
  ];
} 