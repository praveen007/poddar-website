import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section class="hero-section">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </section>
  `,
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  @Input() title = 'About Us';
  @Input() subtitle = '';
}
