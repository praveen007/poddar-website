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
  showLogin=false;

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

  // onResize logic can be handled in the parent or elsewhere if needed
}
