import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'onboarding', pathMatch: 'full' },

  {
    path: 'onboarding',
    loadComponent: () =>
      import('./pages/onboarding/welcome.page').then(m => m.WelcomePage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login.page').then(m => m.LoginPage),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/auth/signup.page').then(m => m.SignupPage),
  },
  {
    path: 'feed',
    loadComponent: () =>
      import('./pages/feed/feed.page').then(m => m.FeedPage),
  },
  // {
  //   path: 'messages',
  //   loadComponent: () =>
  //     import('./pages/messages/chat-list.page').then(m => m.ChatListPage),
  // },
  // {
  //   path: 'forum',
  //   loadComponent: () =>
  //     import('./pages/forum/forum-categories.page').then(m => m.ForumCategoriesPage),
  // },
  // {
  //   path: 'profile',
  //   loadComponent: () =>
  //     import('./pages/profile/profile.page').then(m => m.ProfilePage),
  // },
];
