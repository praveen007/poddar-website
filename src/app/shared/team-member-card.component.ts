import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-member-card',
  standalone: true,
  template: `
    <div class="team-member-card">
      <img [src]="photo" [alt]="name" class="team-photo" />
      <h3>{{ name }}</h3>
      <p>{{ role }}</p>
    </div>
  `,
  styleUrl: './team-member-card.component.scss'
})
export class TeamMemberCardComponent {
  @Input() name = '';
  @Input() role = '';
  @Input() photo = '';
}
