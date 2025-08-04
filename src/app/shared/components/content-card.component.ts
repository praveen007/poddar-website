import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCardData } from '../interfaces/design-specifications.interface';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="contents_card_wrapper" data-aos="fade-up">
      <h2>{{ data.title }}</h2>
      <p>{{ data.description }}</p>
      <div *ngIf="data.ctaText && data.ctaLink" class="cta-wrapper">
        <a [href]="data.ctaLink" class="btn-danger arrow">
          {{ data.ctaText }}
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() data!: ContentCardData;
} 