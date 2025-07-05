import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tabbed-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabbed-box.component.html',
  styleUrls: ['./tabbed-box.component.scss']
})
export class TabbedBoxComponent implements OnInit {
  @Input() tabs: { label: string; content: string }[] = [];
  @Input() activeIndex: number = 0;
  @Output() tabChanged = new EventEmitter<number>();

  ngOnInit() {
    if (this.activeIndex < 0 || this.activeIndex >= this.tabs.length) {
      this.activeIndex = 0;
    }
  }

  selectTab(index: number) {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
      this.tabChanged.emit(index);
    }
  }
}
