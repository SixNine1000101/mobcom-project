import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonIcon } from "@ionic/angular/standalone";

@Component({
    selector: 'app-notification',
    templateUrl: './notification.page.html',
    standalone: true,
    imports: [IonIcon, IonToolbar, IonHeader, IonContent, CommonModule, FormsModule, RouterModule],
})
export class NotificationPage implements OnInit {
    selectedFilter: 'all' | 'mentions' | 'requests' = 'all';
    constructor(private router: Router) { }

    ngOnInit() { }
}
