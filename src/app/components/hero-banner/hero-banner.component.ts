import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class HeroBannerComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() subtitle?: string;
}