import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlissonPageRoutingModule } from './alisson-routing.module';

import { AlissonPage } from './alisson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlissonPageRoutingModule
  ],
  declarations: [AlissonPage]
})
export class AlissonPageModule {}
