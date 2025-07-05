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
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() backgroundImage: string = '';
} 