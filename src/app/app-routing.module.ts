import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  
  
  {
    path: '',
    loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'servico',
    children:
    [

      {
        path: '',
        loadChildren: () => import('./servico/servico.module').then( m => m.ServicoPageModule)
      },
      
    ]
  },

  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'cadmos',
    loadChildren: () => import('./cadmos/cadmos.module').then( m => m.CadmosPageModule)
  },
  {
    path: 'portifolio',
    loadChildren: () => import('./portifolio/portifolio.module').then( m => m.PortifolioPageModule)
  },
  {
    path: 'equipe',
    loadChildren: () => import('./equipe/equipe.module').then( m => m.EquipePageModule)
  },
  {
    path: 'alisson',
    loadChildren: () => import('./alisson/alisson.module').then( m => m.AlissonPageModule)
  },

  {
    path: 'folder/:id/:nome',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./lista/lista.module').then( m => m.ListaPageModule)
  }


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
