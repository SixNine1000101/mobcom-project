import { Component, EventEmitter, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment-box',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  template: `
    <ion-item>
      <ion-input [(ngModel)]="comment" placeholder="Write a comment..."></ion-input>
      <ion-button fill="clear" (click)="sendComment()">Send</ion-button>
    </ion-item>
  `
})
export class CommentBoxComponent {
  comment = '';
  @Output() submitted = new EventEmitter<string>();

  sendComment() {
    if (this.comment.trim()) {
      this.submitted.emit(this.comment);
      this.comment = '';
    }
  }
}
