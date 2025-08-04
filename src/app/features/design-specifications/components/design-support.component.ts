import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DesignSupportData {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-design-support',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="design__support_wrapper bg-lightBlue">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-5">
            <div class="contents_card_wrapper" data-aos="fade-up">
              <h2>{{ data.title }}</h2>
              <p class="card-text">{{ data.description }}</p>
              <a [href]="data.ctaLink" class="btn-danger arrow">
                {{ data.ctaText }}
              </a>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-6 offset-lg-1">
            <div class="img_box_wrapper" data-aos="fade-up">
              <img [src]="data.imageSrc" [alt]="data.imageAlt" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./design-support.component.scss']
})
export class DesignSupportComponent {
  @Input() data!: DesignSupportData;
} 