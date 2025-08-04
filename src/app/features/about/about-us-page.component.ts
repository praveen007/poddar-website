import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section.component';
import { SectionTitleComponent } from '../../shared/section-title.component';
import { TeamGridComponent } from './team-grid.component';
import { TestimonialSliderComponent } from './testimonial-slider.component';

import { AboutStatsCounterComponent } from './about-stats-counter.component';
import { AwardsSwiperComponent } from '../../components/awards-swiper.component';
import { MilestoneSwiperComponent } from '../../components/milestone-swiper.component';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss'],
  imports: [
    CommonModule,
    HeroSectionComponent,
    SectionTitleComponent,
    TeamGridComponent,
    TestimonialSliderComponent,
    AboutStatsCounterComponent,
    AwardsSwiperComponent,
    MilestoneSwiperComponent
  ]
})
export class AboutUsPageComponent {
  milestones = [
    { year: '2023', event: 'Rainway Product Launch' },
    { year: '2023', event: 'Introduced complete range of Industrial Valves' },
    { year: '2022', event: 'Drain Pro Product Launch' },
    { year: '2021', event: 'Commissioning of Cuttack Plant' },
    { year: '2021', event: 'Allu Arjun onboard, for Southern Markets' },
    { year: '2021', event: 'Multi Pro Product Launch' },
    { year: '2021', event: "Introduced India's First Anti Viral Water Tanks" },
    { year: '2021', event: 'Underground SWR - Product Launch' },
    { year: '2020', event: 'Launched Sarita Water Tank' },
    { year: '2020', event: 'Ranveer Singh comes on board as Brand Ambassador' },
    { year: '2018', event: 'Commissioning of Ghiloth Plant' },
    { year: '2018', event: 'Acquired Rex Poly Extrusion Ltd' },
    { year: '2016', event: 'CPVC Pro - Product Launch' },
    { year: '2015', event: 'Astral Silencio - Product Launch' },
    { year: '2014', event: 'Salman Khan comes Onboard as Brand Ambassador' },
    { year: '2013', event: 'Commissioning of Hosur Plant' },
    { year: '2012', event: 'Bore-Well - Product Launch' },
    { year: '2009', event: 'Commissioning of Dholka Plant' },
    { year: '2007', event: 'Astral became a public limited company' },
    { year: '2007', event: '1st to get NSF approval for CPVC piping in India' },
    { year: '2004', event: 'Launched 1st Lead-Free uPVC Piping System of India' },
    { year: '2000', event: "Launched India's 1st domestic CPVC piping system" },
    { year: '1998', event: 'Launched 1st CPVC Piping system of India' },
    { year: '1996', event: 'Astral Incorporated' }
  ];

  plants = [
    { location: 'Santej, Gujarat', products: 'Pipes, Fittings & Tanks', img: 'https://www.astralpipes.com/wp-content/uploads/2023/06/Santej-1.jpg' },
    { location: 'Dholka, Gujarat', products: 'Pipes & Fittings', img: 'https://www.astralpipes.com/wp-content/uploads/2023/06/Dholka1.jpg' },
    { location: 'Hosur, Tamilnadu', products: 'Pipes, Fittings & Tanks', img: 'https://www.astralpipes.com/wp-content/uploads/2023/06/Hosur.jpg' },
    { location: 'Ghiloth, Rajasthan', products: 'Pipes, Fittings & Tanks', img: 'https://www.astralpipes.com/wp-content/uploads/2023/06/Ghiloth.jpg' },
    { location: 'Sangli, Maharashtra', products: 'Pipes & Fittings', img: 'https://www.astralpipes.com/wp-content/uploads/2023/06/Sangli.jpg' },
    { location: 'Aurangabad, Maharashtra', products: 'Pipes, Fittings & Tanks', img: 'https://www.astralpipes.com/wp-content/uploads/2023/06/Aurangabad.jpg' },
    { location: 'Sitarganj, Uttarakhand', products: 'Pipes & Fittings', img: 'https://www.astralpipes.com/wp-content/uploads/2023/06/Sittarganj.jpg' },
    { location: 'Cuttack, Odisha, India', products: 'Pipes, Fittings & Tanks', img: 'https://www.astralpipes.com/wp-content/uploads/2023/06/Cuttack1.jpg' }
  ];

  plantSliderIndex = 0;
  plantsPerView = 4;

  get visiblePlants() {
    return this.plants.slice(this.plantSliderIndex, this.plantSliderIndex + this.plantsPerView);
  }

  get maxPlantSliderIndex() {
    return Math.max(0, this.plants.length - this.plantsPerView);
  }

  prevPlant() {
    if (this.plantSliderIndex > 0) {
      this.plantSliderIndex--;
    }
  }

  nextPlant() {
    if (this.plantSliderIndex < this.maxPlantSliderIndex) {
      this.plantSliderIndex++;
    }
  }

  awards = [
    { title: 'Consumer Validated Superbrand Award', description: 'Recognised as Consumer Validated Superbrand – India for 2017 and then for 4 consecutive years 2019, 2020, 2021, 2022 and 2023', years: '2017 to 2023', img: 'https://www.astralpipes.com/wp-content/uploads/2023/06/MicrosoftTeams-image-147.png' },
    { title: 'Great Place to Work Certified', description: 'Astral Pipes Honored as a Great Place to Work for 2 consecutive years: Building a Stellar Workplace Culture', years: '2022, 2023', img: 'https://www.astralpipes.com/wp-content/uploads/2023/02/4.png' },
    { title: "India's Most Desired Brand Award", description: "India's Most Desired Brand based on TRA's Brand Trust Report", years: '2022', img: 'https://www.astralpipes.com/wp-content/uploads/2023/08/desire.png' },
    { title: "India's Most Trusted Pipe Brand Award", description: "Awarded as India's Most Trusted Pipe Brand", years: '2016, 2019 to 2024', img: 'https://www.astralpipes.com/wp-content/uploads/2023/08/power-of-trust.png' },
    { title: "India's Top 500 Companies - Dun & Bradstreet", description: "Shortlisted & profiled in the list of India's Top 500 Companies for the year 2021 publication", years: '2021', img: 'https://www.astralpipes.com/wp-content/uploads/2023/08/download-1.png' },
    { title: "India's Most Attractive Pipe Brand Awards", description: "Awarded as India's Most Attractive Pipe Brand", years: '2016', img: 'https://www.astralpipes.com/wp-content/uploads/2023/08/MicrosoftTeams-image-175.png' },
    { title: "Consumer Validated India's Most Trusted Pipe Brand Award", description: "Awarded as India's Most Trusted Brand Award", years: '2015', img: 'https://www.astralpipes.com/wp-content/uploads/2023/08/Most-Trusted-Brand-Logo.png' },
    { title: 'Fortune India 500', description: 'Awarded as Value Creator during the first ever Fortune India Next 500', years: '2015', img: 'https://www.astralpipes.com/wp-content/uploads/2023/08/MicrosoftTeams-image-176.jpg' },
    { title: "India's Most Promising Brand Award by ibrands360", description: "Awarded as India's Most Promising Brand", years: '2014', img: 'https://www.astralpipes.com/wp-content/uploads/2023/08/ibrand.png' },
    { title: 'Recognised for Smart Innovation by Inc. India Innovative 100', description: "Recognised for Smart Innovation under category of 'Technology'", years: '2013', img: 'https://www.astralpipes.com/wp-content/uploads/2023/08/MicrosoftTeams-image-177-scaled.jpg' },
    { title: 'Business Standard Star SME Award', description: 'Awarded as Business Standard Star SME', years: '2013', img: 'https://www.astralpipes.com/wp-content/uploads/2023/08/SME.png' }
  ];

  businessVerticals = [
    { name: 'Astral Adhesives', link: 'https://www.astraladhesives.com/', img: 'https://www.astralpipes.com/wp-content/uploads/2023/01/astral_adhesive.png' },
    { name: 'Bond It', link: 'https://bond-it.co.uk/', img: 'https://www.astralpipes.com/wp-content/uploads/2023/07/BondIt-Logo.png' },
    { name: 'Astral Bathware', link: 'https://astralbathware.com/', img: 'https://www.astralpipes.com/wp-content/uploads/2023/07/Bathware-Horizontal-logo-Final.png' },
    { name: 'Astral Paints', link: 'https://astralpaints.com', img: 'https://www.astralpipes.com/wp-content/uploads/2024/07/astral_paints.png' },
    { name: 'Trubuild', link: 'https://trubuild.in/', img: 'https://www.astralpipes.com/wp-content/uploads/2024/07/trubuild-right-lod.png' }
  ];
}
