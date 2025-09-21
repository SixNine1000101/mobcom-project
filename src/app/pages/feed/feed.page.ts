import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../../components/post-card/post-card.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [IonicModule, CommonModule, PostCardComponent],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>News Feed</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <app-post-card *ngFor="let post of posts" [post]="post"></app-post-card>
    </ion-content>
  `
})
export class FeedPage {
  posts = [
    { author: 'mama mo', text: 'f  ferjwbefjbew!', date: new Date(), likes: 0 } // teporary post bruh
  ];
}
