import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Counter {
  label: string;
  value: number;
  icon?: string;
}

@Component({
  selector: 'app-counter-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-section.component.html',
  styleUrls: ['./counter-section.component.scss']
})
export class CounterSectionComponent implements OnInit {
  counters: Counter[] = [
    { label: 'Employees', value: 7300 },
    { label: 'Warehouses', value: 15 },
    { label: 'Channel Partners', value: 1500 },
    { label: 'Retail Partners', value: 60000 }
  ];

  ngOnInit() {
    // No animations, just display counters
  }
} 