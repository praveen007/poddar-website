import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `<h2 class="section-title">{{ title }}</h2>`,
  styleUrl: './section-title.component.scss'
})
export class SectionTitleComponent {
  @Input() title = '';
}
