import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { IonInput } from '@ionic/angular/standalone';
import { IonButton } from '@ionic/angular/standalone';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { HeroBannerComponent } from 'src/app/components/hero-banner/hero-banner.component';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  standalone: true,
  imports: [
    HeroBannerComponent, 
    CommonModule,
    FormsModule,
    RouterModule,
    IonContent,
    PostCardComponent,
    NavbarComponent,
  ]
})
export class ExplorePage implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}