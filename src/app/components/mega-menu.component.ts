import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface MegaMenuItem {
  category: string;
  items: {
    title: string;
    url: string;
    image?: string;
    target?: string;
  }[];
}
export interface MegaMenuColumn {
  heading?: string;
  items: MegaMenuItem[];
}

@Component({
  selector: 'app-mega-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss']
})
export class MegaMenuComponent {
  @Input() label!: string;
  @Input() menu: MegaMenuItem[] = [];
  @Input() open = false;
  isOpen = false; // menu visibility flag
  @Output() openMenu = new EventEmitter<void>();
  @Output() closeMenu = new EventEmitter<void>();
  @Output() toggleMenu = new EventEmitter<void>();


  activeCategoryIndex: number = 0;

  setActive(index: number) {
    this.activeCategoryIndex = index;
  }

  get activeItems() {
    return this.menu[this.activeCategoryIndex]?.items || [];
  }

  setOpen(open: boolean) {
  this.isOpen = open;
  if (open) {
    this.activeCategoryIndex = 0;
  }
}
} 