import { Component, HostListener,ElementRef } from '@angular/core';
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
  constructor(private _eref:ElementRef){}

  // Track which dropdown is open (by index or name)
  openDropdown: string | null = null;
  isMobileMenu = false;
  showInput = false;
  showLogin = false;
  mobileMenuOpen = false;

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

  toggleMobileMenu() {
    console.log('Toggle mobile menu clicked, current state:', this.mobileMenuOpen);
    this.mobileMenuOpen = !this.mobileMenuOpen;
    console.log('New state:', this.mobileMenuOpen);
    
    // Use setTimeout to check after Angular has updated the DOM
    setTimeout(() => {
      const mobileMenu = document.querySelector('.mobile-menu');
      console.log('Mobile menu element:', mobileMenu);
      console.log('Active class applied:', mobileMenu?.classList.contains('active'));
      console.log('All classes:', mobileMenu?.className);
      if (mobileMenu) {
        console.log('Computed transform:', window.getComputedStyle(mobileMenu).transform);
        console.log('Mobile menu visible:', (mobileMenu as HTMLElement).offsetWidth > 0);
      }
    }, 0);
    
    // Prevent body scroll when mobile menu is open
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  toggleInput()
  {
    this.showInput = !this.showInput;
  }

  toggleLogin()
  {
    this.showLogin = !this.showLogin;
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: any) {
    // Narrow down to ensure it's an HTMLElement
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (this.showLogin && !this._eref.nativeElement.contains(target)) {
      this.showLogin = false;
    }
  }

  // Detect mobile width for click/tap logic
  get isMobile() {
    return window.innerWidth <= 900;
  }

  // Detect mobile view for conditional rendering
  get isMobileView() {
    const isMobile = window.innerWidth <= 767;
    console.log('Window width:', window.innerWidth, 'Is mobile:', isMobile);
    return isMobile;
  }

  // onResize logic can be handled in the parent or elsewhere if needed
}
