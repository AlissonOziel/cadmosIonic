import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadmosPageRoutingModule } from './cadmos-routing.module';

import { CadmosPage } from './cadmos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadmosPageRoutingModule
  ],
  declarations: [CadmosPage]
})
export class CadmosPageModule {}
