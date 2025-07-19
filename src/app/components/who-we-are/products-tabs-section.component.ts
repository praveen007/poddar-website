import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProductTab {
  label: string;
  img: string;
  text: string;
}

@Component({
  selector: 'app-products-tabs-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-tabs-section.component.html',
  styleUrls: ['./products-tabs-section.component.scss']
})
export class ProductsTabsSectionComponent {
  @Input() tabs: ProductTab[] = [];
  activeTab: number = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }
} 