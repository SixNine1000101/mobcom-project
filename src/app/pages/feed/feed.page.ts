import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { IonInput } from '@ionic/angular/standalone';
import { IonButton } from '@ionic/angular/standalone';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  standalone: true,
  imports: [IonIcon, 
    CommonModule,
    FormsModule,
    RouterModule,
    IonContent,
    PostCardComponent,
    NavbarComponent,
  ]
})
export class FeedPage implements OnInit {
   posts = [
    { author: 'University', profileImage: "../assets/shapes.svg", username: "universityadmin", text: 'Walang pasok (sana)', image: "../assets/shapes.svg",date: new Date().toISOString(), likes: 0, reposts: 0, comments: 0, saved: false },
    { author: 'Dexter', username: "staticvoidmalfunction", text: 'First working feed post!', date: "2025-10-06T17:35:12.345Z", likes: 3, reposts: 1, comments: 2, saved: true },
  ];
  constructor() { }

  ngOnInit() {
  }

}
