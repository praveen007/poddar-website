import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {
  @Input() imageSrc!: string;
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() description!: string;
  @Input() features!: string[];
  @Input() badgeText?: string;
}
