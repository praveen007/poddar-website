import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MegaMenuItem {
  label: string;
  href: string;
  img?: string;
  target?: string;
}
export interface MegaMenuColumn {
  heading?: string;
  items: MegaMenuItem[];
}

@Component({
  selector: 'app-mega-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss']
})
export class MegaMenuComponent {
  @Input() label!: string;
  @Input() columns: MegaMenuColumn[] = [];
  @Input() open = false;

  @Output() openMenu = new EventEmitter<void>();
  @Output() closeMenu = new EventEmitter<void>();
  @Output() toggleMenu = new EventEmitter<void>();
} 