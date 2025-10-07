import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
  
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, RouterModule]
})
export class SignupPage implements OnInit {

  currentStep = 0;
  constructor() { }

  ngOnInit() {
  }

}
