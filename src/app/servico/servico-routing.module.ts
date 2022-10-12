import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicoPage } from './servico.page';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'devs',
    pathMatch: 'full'
  },

  {
    path: '',
    component: ServicoPage,
    children: 
    [

      

      {
      path: 'devs',
      loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },

      {
        path: 'manutencao',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },

      {
        path: 'desing',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },

      
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicoPageRoutingModule {}
