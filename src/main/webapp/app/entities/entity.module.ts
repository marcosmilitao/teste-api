import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.TestUsersBlogModule)
      },
      {
        path: 'post',
        loadChildren: () => import('./post/post.module').then(m => m.TestUsersPostModule)
      },
      {
        path: 'tag',
        loadChildren: () => import('./tag/tag.module').then(m => m.TestUsersTagModule)
      },
      {
        path: 'autor',
        loadChildren: () => import('./autor/autor.module').then(m => m.TestUsersAutorModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class TestUsersEntityModule {}
