import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-counter',
  standalone: true,
  template: `
    <div class="stats-counter">
      <div class="stat" *ngFor="let stat of stats">
        <div class="stat-value">{{ stat.value }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  `,
  styleUrls: ['./stats-counter.component.scss'],
  imports: [CommonModule]
})
export class StatsCounterComponent {
  stats = [
    { value: '25+', label: 'Years of Excellence' },
    { value: '1000+', label: 'Employees' },
    { value: '50+', label: 'Countries Served' },
    { value: '5000+', label: 'Projects Completed' }
  ];
}
