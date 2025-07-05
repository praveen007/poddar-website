import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-innovation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './innovation-card.component.html',
  styleUrls: ['./innovation-card.component.scss']
})
export class InnovationCardComponent {
  @Input() img: string = '';
  @Input() alt: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
} 