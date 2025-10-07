import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, RouterModule],
})
export class LandingPage implements OnInit {
  constructor(private router: Router) {}


  ngOnInit() {}
}
