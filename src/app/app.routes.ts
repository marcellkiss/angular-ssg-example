import { Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post.component';

export const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
