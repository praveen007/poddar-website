import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.scss']
})
export class BannerSectionComponent {
  @Input() leftTitle: string = '';
  @Input() leftText: string = '';
  @Input() rightTitle: string = '';
  @Input() rightText: string = '';
  @Input() logo: string = '';
} 