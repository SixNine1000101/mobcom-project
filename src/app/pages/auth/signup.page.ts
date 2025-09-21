import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,  RouterModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Sign Up</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-input placeholder="Name"></ion-input>
      <ion-input placeholder="Password" type="password"></ion-input>
      <ion-input placeholder="Confirm Password" type="password"></ion-input>
      <ion-button expand="block" routerLink="/feed">Create Account</ion-button>
    </ion-content>
  `
})
export class SignupPage {}
