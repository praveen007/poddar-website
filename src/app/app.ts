import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { ScrollEffectsService } from './services/scroll-effects.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = 'poddar-website';

  constructor(private scrollEffectsService: ScrollEffectsService) {}

  ngOnInit(): void {
    // Initialize scroll effects after the view is initialized
    setTimeout(() => {
      this.scrollEffectsService.init();
    }, 100);
  }
}
