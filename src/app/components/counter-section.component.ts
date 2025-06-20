import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Counter {
  label: string;
  value: number;
  icon?: string;
  display: number;
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
    { label: 'Employees', value: 7300, display: 0 },
    { label: 'Warehouses', value: 15, display: 0 },
    { label: 'Channel Partners', value: 1500, display: 0 },
    { label: 'Retail Partners', value: 60000, display: 0 }
  ];

  ngOnInit() {
    this.counters.forEach((counter, i) => {
      this.animateCounter(i);
    });
  }

  animateCounter(index: number) {
    const counter = this.counters[index];
    const duration = 1200; // ms
    const frameRate = 24; // fps
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;
    const increment = counter.value / totalFrames;
    const interval = setInterval(() => {
      frame++;
      counter.display = Math.round(increment * frame);
      if (frame >= totalFrames) {
        counter.display = counter.value;
        clearInterval(interval);
      }
    }, duration / totalFrames);
  }
} 