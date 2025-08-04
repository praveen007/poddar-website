import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="test-component">
      <h1>Design Specifications Page</h1>
      <p>This is a test component to verify the structure works.</p>
    </div>
  `,
  styles: [`
    .test-component {
      padding: 2rem;
      text-align: center;
      background-color: #f8f9fa;
      min-height: 50vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    h1 {
      color: #333;
      margin-bottom: 1rem;
    }
    
    p {
      color: #666;
      font-size: 1.1rem;
    }
  `]
})
export class TestComponent {} 