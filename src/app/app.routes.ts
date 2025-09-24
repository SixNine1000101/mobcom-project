import { Routes } from '@angular/router';
import { OnboardingPage } from './pages/onboarding/onboarding.page';
import { LoginPage } from './pages/auth/login/login.page';
import { SignupPage } from './pages/auth/signup/signup.page';
import { FeedPage } from './pages/feed/feed.page'; // Removed because lazy loading is used below
import { MessagesPage } from './pages/messages/messages.page';
import { ForumPage } from './pages/forum/forum.page';
import { ProfilePage } from './pages/profile/profile.page';

export const routes: Routes = [
  { path: '', component: OnboardingPage },
  { path: 'login', component: LoginPage },
  { path: 'signup', component: SignupPage },
  // { path: 'feed', component: FeedPage },
  { path: 'messages', component: MessagesPage },
  { path: 'forum', component: ForumPage },
  { path: 'profile', component: ProfilePage },
  {
    path: 'feed',
    loadComponent: () => import('./pages/feed/feed.page').then( m => m.FeedPage)
  },
  { path: '**', redirectTo: '' }
];
