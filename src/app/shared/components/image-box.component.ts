import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-box',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="img_box_wrapper" data-aos="fade-up">
      <img [src]="imageSrc" [alt]="imageAlt" class="img-fluid" />
    </div>
  `,
  styleUrls: ['./image-box.component.scss']
})
export class ImageBoxComponent {
  @Input() imageSrc!: string;
  @Input() imageAlt!: string;
} 