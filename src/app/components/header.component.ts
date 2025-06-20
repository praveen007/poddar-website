import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBottomComponent } from './header-bottom.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderBottomComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Track which dropdown is open (by index or name)
  openDropdown: string | null = null;
  isMobileMenu = false;

  // Open dropdown on hover (desktop) or click (mobile)
  openMenu(name: string) {
    this.openDropdown = name;
  }
  closeMenu() {
    this.openDropdown = null;
  }
  toggleMenu(name: string) {
    this.openDropdown = this.openDropdown === name ? null : name;
  }

  // Detect mobile width for click/tap logic
  get isMobile() {
    return window.innerWidth <= 900;
  }

  // onResize logic can be handled in the parent or elsewhere if needed
}
