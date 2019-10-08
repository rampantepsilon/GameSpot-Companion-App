import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'articles', loadChildren: './articles/articles.module#ArticlesPageModule' },
  { path: 'reviews', loadChildren: './reviews/reviews.module#ReviewsPageModule' },
  { path: 'releases', loadChildren: './releases/releases.module#ReleasesPageModule' },
  //Added Paged for potential sorting of releases
  { path: 'top', loadChildren: './reviews/top/top.module#TopPageModule' },
  { path: 'worst', loadChildren: './reviews/worst/worst.module#WorstPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
