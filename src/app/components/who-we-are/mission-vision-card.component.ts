import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mission-vision-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission-vision-card.component.html',
  styleUrls: ['./mission-vision-card.component.scss']
})
export class MissionVisionCardComponent {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
} 