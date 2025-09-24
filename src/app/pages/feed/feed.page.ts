import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { IonInput } from '@ionic/angular/standalone';
import { IonButton } from '@ionic/angular/standalone';
import { PostCardComponent } from '../../components/post-card/post-card.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCardContent, IonCard, 
    CommonModule,
    FormsModule,
    RouterModule,
    IonButton,
    IonInput,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    PostCardComponent,
  ]
})
export class FeedPage implements OnInit {
   posts = [
    { author: 'University', text: 'Walang pasok (sana)', date: new Date(), likes: 0 },
    { author: 'Dexter', text: 'First working feed post!', date: new Date(), likes: 3 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
