import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  template: `
    <ion-content class="ion-padding">
      <h1>Welcome to LANBook</h1>
      <ion-button routerLink="/login">Get Started</ion-button>
    </ion-content>
  `
})
export class WelcomePage {}
