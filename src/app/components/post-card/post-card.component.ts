import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-card>
      <ion-card-header>
        <ion-card-title>{{ post?.author }}</ion-card-title>
        <ion-card-subtitle>{{ post?.date | date:'short' }}</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        <p>{{ post?.text }}</p>
      </ion-card-content>

      <ion-row class="ion-justify-content-around ion-padding">
        <ion-button fill="clear" size="small">👍 Like</ion-button>
        <ion-button fill="clear" size="small">💬 Comment</ion-button>
        <ion-button fill="clear" size="small">🔖 Save</ion-button>
      </ion-row>
    </ion-card>
  `
})
export class PostCardComponent {
  @Input() post: any;
}
