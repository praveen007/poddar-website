import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial-slider',
  standalone: true,
  template: `
    <div class="testimonial-slider">
      <button (click)="prev()" class="slider-btn">&#8592;</button>
      <div class="testimonial" *ngFor="let t of [testimonials[current]]; let i = index">
        <p class="testimonial-text">"{{ t.text }}"</p>
        <div class="testimonial-author">- {{ t.author }}</div>
      </div>
      <button (click)="next()" class="slider-btn">&#8594;</button>
    </div>
  `,
  styleUrls: ['./testimonial-slider.component.scss'],
  imports: [CommonModule]
})
export class TestimonialSliderComponent {
  testimonials = [
    { text: 'Astral Pipes has always delivered on quality and service. Highly recommended!', author: 'Amit Shah, Contractor' },
    { text: 'We have used Astral products for years and trust their innovation.', author: 'Priya Mehta, Architect' },
    { text: 'Excellent support and reliable piping solutions.', author: 'Rakesh Kumar, Builder' }
  ];
  current = 0;
  prev() { this.current = (this.current - 1 + this.testimonials.length) % this.testimonials.length; }
  next() { this.current = (this.current + 1) % this.testimonials.length; }
}
