import { Component } from '@angular/core';
import { ProductsTabsComponent } from '../../components/products-tabs.component';
import { BannerComponent } from '../../components/banner.component';
import { AdvantageTabsComponent } from '../../components/advantage-tabs.component';
import { CounterSectionComponent } from '../../components/counter-section.component';
import { AwardsSwiperComponent } from '../../components/awards-swiper.component';
import { ProjectsComponent } from '../../components/projects.component';
import { InnovationsSwiperComponent } from '../../components/innovations-swiper.component';
import { TestimonialSwiperComponent } from '../../components/testimonial-swiper.component';
import { PlumbingSchoolComponent } from '../../components/plumbing-school.component';
import { ProductTabsComponent } from '../../components/product-tabs.component';
import { AnimateOnScrollDirective } from '../../shared/animate-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductTabsComponent,
    ProductsTabsComponent,
    BannerComponent,
    AdvantageTabsComponent,
    CounterSectionComponent,
    AwardsSwiperComponent,
    ProjectsComponent,
    InnovationsSwiperComponent,
    TestimonialSwiperComponent,
    PlumbingSchoolComponent,
    AnimateOnScrollDirective
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
