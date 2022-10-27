import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tv',
    pathMatch: 'full',
  },
  {
    path: 'tv',
    loadChildren: () => import('./pages/tv/tv.module').then( m => m.TvPageModule)
  },
  {
    path: 'tv/:id',
    loadChildren: () => import('./pages/tv-details/tv-details.module').then( m => m.TvDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
