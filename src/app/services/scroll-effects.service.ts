import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollEffectsService {
  private scrollY = new BehaviorSubject<number>(0);
  scrollY$ = this.scrollY.asObservable();

  constructor(private ngZone: NgZone) {
    this.initScrollListener();
  }

  private initScrollListener(): void {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        this.scrollY.next(scrollY);
        this.updateScrollProgress(scrollY);
        this.updateBackToTop(scrollY);
        this.updateHeaderEffects(scrollY);
      });
    });
  }

  private updateScrollProgress(scrollY: number): void {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / scrollHeight) * 100;
    
    const progressBar = document.querySelector('.scroll-progress') as HTMLElement;
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
  }

  private updateBackToTop(scrollY: number): void {
    const backToTop = document.querySelector('.back-to-top') as HTMLElement;
    if (backToTop) {
      if (scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  }

  private updateHeaderEffects(scrollY: number): void {
    const header = document.querySelector('.navHeader__wrapper') as HTMLElement;
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }

  // Intersection Observer for scroll animations
  observeElements(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      '.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale, .scroll-rotate, .scroll-stagger, .text-reveal, .image-reveal, .counter-animate'
    );

    animatedElements.forEach(el => observer.observe(el));
  }

  // Parallax effect
  initParallax(): void {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach((element: Element) => {
        const speed = (element as HTMLElement).dataset['speed'] || '0.5';
        const yPos = -(scrolled * parseFloat(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  // Smooth scroll to element
  scrollToElement(elementId: string, offset: number = 0): void {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  // Scroll to top
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Counter animation
  animateCounters(): void {
    const counters = document.querySelectorAll('.counter-animate.visible');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = Math.floor(current).toString();
      }, 16);
    });
  }

  // Initialize all scroll effects
  init(): void {
    this.observeElements();
    this.initParallax();
    this.createScrollProgressBar();
    this.createBackToTopButton();
  }

  private createScrollProgressBar(): void {
    if (!document.querySelector('.scroll-progress')) {
      const progressBar = document.createElement('div');
      progressBar.className = 'scroll-progress';
      document.body.appendChild(progressBar);
    }
  }

  private createBackToTopButton(): void {
    if (!document.querySelector('.back-to-top')) {
      const backToTop = document.createElement('button');
      backToTop.className = 'back-to-top';
      backToTop.innerHTML = '↑';
      backToTop.addEventListener('click', () => this.scrollToTop());
      document.body.appendChild(backToTop);
    }
  }
} 