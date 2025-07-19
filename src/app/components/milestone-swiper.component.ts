import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Milestone {
  year: string;
  event: string;
}

@Component({
  selector: 'app-milestone-swiper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './milestone-swiper.component.html',
  styleUrls: ['./milestone-swiper.component.scss']
})
export class MilestoneSwiperComponent {
  @Input() milestones: Milestone[] = [];

  currentIndex = 0;
  milestonesPerView = 6;

  get visibleMilestones(): Milestone[] {
    return this.milestones.slice(this.currentIndex, this.currentIndex + this.milestonesPerView);
  }

  get maxIndex(): number {
    return Math.max(0, this.milestones.length - this.milestonesPerView);
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
    }
  }

  goToSlide(index: number) {
    this.currentIndex = Math.min(index, this.maxIndex);
  }

  get isPrevDisabled(): boolean {
    return this.currentIndex === 0;
  }

  get isNextDisabled(): boolean {
    return this.currentIndex >= this.maxIndex;
  }
} 