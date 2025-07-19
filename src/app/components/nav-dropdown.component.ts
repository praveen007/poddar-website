import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface NavDropdownItem {
  label: string;
  href: string;
  target?: string;
}

@Component({
  selector: 'app-nav-dropdown',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.scss']
})
export class NavDropdownComponent {
  @Input() label!: string;
  @Input() items: NavDropdownItem[] = [];
  @Input() open = true;

  @Output() openMenu = new EventEmitter<void>();
  @Output() closeMenu = new EventEmitter<void>();
  @Output() toggleMenu = new EventEmitter<void>();
} 