import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
  standalone: true,
  imports: [IonContent, NavbarComponent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class ForumPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
