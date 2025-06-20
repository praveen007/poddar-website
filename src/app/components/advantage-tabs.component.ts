import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AdvantageTab {
  icon: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-advantage-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advantage-tabs.component.html',
  styleUrls: ['./advantage-tabs.component.scss']
})
export class AdvantageTabsComponent {
  tabs: AdvantageTab[] = [
    {
      icon: 'https://www.ashirvad.com/wp-content/uploads/2024/09/Efficient-Self-Alignment-System.svg',
      title: 'Efficient Self-Alignment System',
      content: 'Ashirvad Aqualife+ uPVC fittings feature an alignment mark that corresponds with the blue stripe on the pipe, ensuring precise alignment during installation. This system guarantees that fittings are perpendicular to the wall, preventing misalignment and reducing the need for repairs in concealed installations after wall finishing.'
    },
    {
      icon: 'https://www.ashirvad.com/wp-content/uploads/2024/09/Advanced-Antimicrobial-Protection.svg',
      title: 'Advanced Antimicrobial Protection',
      content: 'The antimicrobial formulation of Ashirvad Aqualife+ uPVC pipes, enhanced with advanced silver ion technology, actively penetrates microbial cells, inhibiting their growth and reproduction on the pipe surface. This technology ensures cleaner and safer water flow and minimizes the risk of biofilm formation within the plumbing system.'
    },
    {
      icon: 'https://www.ashirvad.com/wp-content/uploads/2024/09/Unmatched-Safety.svg',
      title: 'Unmatched Safety',
      content: 'Ashirvad Aqualife+ uPVC pipes and fittings are manufactured using a special lead-free compound. This compound is non-toxic and safe for drinking water, ensuring compliance with the stringent safety standards of developed nations.'
    },
    {
      icon: 'https://www.ashirvad.com/wp-content/uploads/2024/09/Superior-Pressure-Capacity.svg',
      title: 'Superior Pressure Capacity',
      content: 'Ashirvad pipes are designed to withstand high pressure, making them suitable for a wide range of applications and ensuring long-term reliability and performance.'
    }
  ];

  activeTab = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }
} 