import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, RouterModule],
})
export class OnboardingPage implements OnInit {
  currentSlide = 0;

  constructor(private router: Router) {}

  nextSlide() {
    if (this.currentSlide < 2) {
      this.currentSlide++;
    } else {
      this.router.navigate(['/landing']);
    }
  }

  ngOnInit() {}
}
