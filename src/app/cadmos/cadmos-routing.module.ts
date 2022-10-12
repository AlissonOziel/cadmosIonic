import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadmosPage } from './cadmos.page';

const routes: Routes = [
  {
    path: '',
    component: CadmosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadmosPageRoutingModule {}
