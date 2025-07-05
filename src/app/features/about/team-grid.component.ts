import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMemberCardComponent } from '../../shared/team-member-card.component';

@Component({
  selector: 'app-team-grid',
  standalone: true,
  template: `
    <div class="team-grid">
      <app-team-member-card *ngFor="let member of team" [name]="member.name" [role]="member.role" [photo]="member.photo"></app-team-member-card>
    </div>
  `,
  styleUrls: ['./team-grid.component.scss'],
  imports: [CommonModule, TeamMemberCardComponent]
})
export class TeamGridComponent {
  team = [
    { name: 'Sandeep Engineer', role: 'Founder & Managing Director', photo: 'assets/team/sandeep.jpg' },
    { name: 'Kairav Engineer', role: 'Director', photo: 'assets/team/kairav.jpg' },
    { name: 'Hiranand Savlani', role: 'Director', photo: 'assets/team/hiranand.jpg' },
    { name: 'Other Key Member', role: 'Leadership', photo: 'assets/team/other.jpg' }
  ];
}
