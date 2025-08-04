import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechnicalCalculationData {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-technical-calculation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="technical__calculation__wrapper bg-lightBlue">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6">
            <div class="img_box_wrapper" data-aos="fade-up">
              <img [src]="data.imageSrc" [alt]="data.imageAlt" class="img-fluid" />
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-5 offset-lg-1">
            <div class="contents_card_wrapper" data-aos="fade-up">
              <h2>{{ data.title }}</h2>
              <p>{{ data.description }}</p>
              <a [href]="data.ctaLink" class="btn-danger arrow">
                {{ data.ctaText }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./technical-calculation.component.scss']
})
export class TechnicalCalculationComponent {
  @Input() data!: TechnicalCalculationData;
} 