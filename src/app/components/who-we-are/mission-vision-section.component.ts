import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionVisionCardComponent } from './mission-vision-card.component';

@Component({
  selector: 'app-mission-vision-section',
  standalone: true,
  imports: [CommonModule, MissionVisionCardComponent],
  templateUrl: './mission-vision-section.component.html',
  styleUrls: ['./mission-vision-section.component.scss']
})
export class MissionVisionSectionComponent {
  @Input() cards: { img: string; title: string; text: string }[] = [];
} 