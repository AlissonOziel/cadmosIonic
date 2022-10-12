import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortifolioPageRoutingModule } from './portifolio-routing.module';

import { PortifolioPage } from './portifolio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortifolioPageRoutingModule
  ],
  declarations: [PortifolioPage]
})
export class PortifolioPageModule {}
