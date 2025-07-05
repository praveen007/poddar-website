import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-stats-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container sectionSpacing">
      <div class="row conterBox numberData aboutCounterBox justify-content-center align-items-center">
        <div class="col-6 col-md-2 col-lg" *ngFor="let stat of stats; let i = index">
          <div class="bigNum" [class.animate]="isVisible" [style.animation-delay]="(i * 0.2) + 's'">
            <span class="counter">{{ stat.value }}</span>+ 
            <span class="conterText">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .conterBox {
      background: #f8f9fa;
      border-radius: 1rem;
      padding: 3rem 2rem;
      margin: 2rem auto;
      box-shadow: 0 2px 12px rgba(0,0,0,0.08);
      max-width: 1200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .aboutCounterBox {
      gap: 1rem;
      align-items: center;
      flex-wrap: nowrap;
      justify-content: center;
      width: 100%;
      margin: 0 auto;
    }
    
    .bigNum {
      text-align: center;
      padding: 1.5rem 0.75rem;
      transition: all 0.3s ease;
      background: #fff;
      border-radius: 0.75rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 1;
      transform: translateY(0);
      min-width: 120px;
    }
    
    .bigNum.animate {
      animation: fadeInUp 0.6s ease forwards;
    }
    
    .bigNum:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    }
    
    .counter {
      font-size: 2rem;
      font-weight: 700;
      color: #1976d2;
      display: block;
      margin-bottom: 0.5rem;
      line-height: 1;
    }
    
    .conterText {
      font-size: 0.85rem;
      color: #555;
      display: block;
      font-weight: 500;
      line-height: 1.3;
      margin: 0;
    }
    
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @media (max-width: 1200px) {
      .conterBox {
        max-width: 1000px;
      }
      
      .counter {
        font-size: 1.8rem;
      }
      
      .conterText {
        font-size: 0.8rem;
      }
      
      .bigNum {
        padding: 1.25rem 0.5rem;
      }
    }
    
    @media (max-width: 768px) {
      .conterBox {
        padding: 2rem 1rem;
        max-width: 100%;
      }
      
      .aboutCounterBox {
        gap: 0.75rem;
        overflow-x: auto;
        justify-content: center;
        padding: 0 1rem;
      }
      
      .bigNum {
        padding: 1rem 0.5rem;
        min-width: 100px;
        flex: 0 0 auto;
      }
      
      .counter {
        font-size: 1.6rem;
        margin-bottom: 0.4rem;
      }
      
      .conterText {
        font-size: 0.75rem;
      }
    }
    
    @media (max-width: 480px) {
      .conterBox {
        padding: 1.5rem 0.5rem;
      }
      
      .aboutCounterBox {
        padding: 0 0.5rem;
      }
      
      .bigNum {
        padding: 0.75rem 0.25rem;
        min-width: 80px;
      }
      
      .counter {
        font-size: 1.4rem;
      }
      
      .conterText {
        font-size: 0.7rem;
      }
    }
  `]
})
export class AboutStatsCounterComponent implements OnInit, AfterViewInit {
  @Input() stats = [
    { value: '25', label: 'Countries Served' },
    { value: '14', label: 'Manufacturing Facilities' },
    { value: '17', label: 'Depots' },
    { value: '1150', label: 'Distributors' },
    { value: '36500', label: 'Dealers' }
  ];

  isVisible = false;

  ngOnInit() {
    // Make counters visible immediately
    this.isVisible = true;
  }

  ngAfterViewInit() {
    // Ensure animation triggers after view is initialized
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }
} 