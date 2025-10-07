import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from 'src/app/shared/pipes/time-ago.pipe';

export interface Post {
  author: string;
  username?: string;
  date?: Date | string;
  text: string;
  profileImage?: string;   // optional profile picture
  image?: string;          // optional post image
  likes: number;
  reposts?: number;
  comments?: number;
  saved?: boolean;
}

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [IonicModule, CommonModule, TimeAgoPipe],
  template: `
    <div class="px-4 bg-white">
      <!-- Header -->
      <div class="flex items-center mb-3">
        <!-- Avatar -->
        <ng-container *ngIf="post?.profileImage; else fallbackAvatar">
          <img [src]="post.profileImage"
               alt="{{ post?.author }}'s profile picture"
               class="flex-shrink-0 h-10 w-10 rounded-full object-cover" />
        </ng-container>
        <ng-template #fallbackAvatar>
          <div class="flex-shrink-0 bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">
            {{ post?.author?.charAt(0) }}
          </div>
        </ng-template>

        <!-- Author + meta -->
        <div class="ml-3 flex-1">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-2">
              <p class="font-bold leading-tight">{{ post?.author }}</p>
              <span class="w-1 h-1 bg-gray-400 rounded-full inline-block"></span>
              <p class="text-sm text-gray-500">{{ (post?.date ?? '') | timeAgo }}</p>
            </div>
            <button type="button" aria-label="More options"
                    class="p-1 rounded-full hover:bg-gray-100">
              <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3a1.5 1.5 0 110 3 ..."/>
              </svg>
            </button>
          </div>
          <h3 class="m-0 text-sm text-gray-400 leading-tight">@{{ post?.username }}</h3>
        </div>
      </div>

      <!-- Content -->
      <div class="mb-3">
        <p>{{ post?.text }}</p>
        <img *ngIf="post?.image"
             [src]="post.image"
             alt="Post image"
             class="w-full rounded-lg mt-2" />
      </div>

      <!-- Actions -->
      <div class="flex justify-between pt-2 text-gray-600 text-sm">
        <button type="button" aria-label="Like post" class="flex items-center space-x-1">
          <span>👍</span><span>{{ post?.likes }}</span>
        </button>
        <button type="button" aria-label="Repost" class="flex items-center space-x-1">
          <span>🔁</span><span>{{ post?.reposts }}</span>
        </button>
        <button type="button" aria-label="Comment" class="flex items-center space-x-1">
          <span>💬</span><span>{{ post?.comments }}</span>
        </button>
        <button type="button" aria-label="Save post" class="flex items-center space-x-1">
          <span [class.text-orange-500]="post?.saved">[]</span>
        </button>
        <button type="button" aria-label="Share post" class="flex items-center">
          <span>↗️</span>
        </button>
      </div>
    </div>
  `
})
export class PostCardComponent {
  @Input() post!: Post;
}