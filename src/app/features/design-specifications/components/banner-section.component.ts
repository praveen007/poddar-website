import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BannerData {
  title: string;
  description: string;
  backgroundImage: string;
  breadcrumbs: Array<{
    label: string;
    link?: string;
    active?: boolean;
  }>;
}

@Component({
  selector: 'app-banner-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="banner__wrapper design__specifications__banner">
      <div class="banner-bg" [style.background-image]="'url(' + data.backgroundImage + ')'">
        <div class="banner_contents_wrapper">
          <div class="container">
            <div class="banner_contents_wrapper">
              <div class="container h-100">
                <nav class="breadcrumb__wrapper" aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li 
                      *ngFor="let item of data.breadcrumbs; let last = last" 
                      class="breadcrumb-item"
                      [class.active]="item.active"
                      [class.disabled]="!item.link">
                      <a *ngIf="item.link && !item.active" [href]="item.link">{{ item.label }}</a>
                      <span *ngIf="!item.link || item.active">{{ item.label }}</span>
                    </li>
                  </ol>
                </nav>
                <div class="row align-items-center h-90">
                  <div class="col-12 col-md-11 col-lg-10 mx-auto">
                    <div class="banner_contents">
                      <h1>{{ data.title }}</h1>
                      <p>{{ data.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./banner-section.component.scss']
})
export class BannerSectionComponent {
  @Input() data!: BannerData;
} 