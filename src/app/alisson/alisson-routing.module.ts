import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlissonPage } from './alisson.page';

const routes: Routes = [
  {
    path: '',
    component: AlissonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlissonPageRoutingModule {}
