import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forum-card',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-card (click)="onOpenThread()">
      <ion-card-header>
        <ion-card-title>{{ thread?.title }}</ion-card-title>
        <ion-card-subtitle>{{ thread?.category }}</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <p>{{ thread?.excerpt }}</p>
      </ion-card-content>

      <ion-row class="ion-padding ion-justify-content-between">
        <span>👍 {{ thread?.upvotes }}</span>
        <span>💬 {{ thread?.comments }}</span>
      </ion-row>
    </ion-card>
  `
})
export class ForumCardComponent {
  @Input() thread: any;

  onOpenThread() {
    console.log("Open thread:", this.thread);
  }
}
