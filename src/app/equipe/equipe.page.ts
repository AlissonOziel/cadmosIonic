import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlissonPage } from '../alisson/alisson.page';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.page.html',
  styleUrls: ['./equipe.page.scss'],
})
export class EquipePage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  async showModal(){
    let modal = await this.modalCtrl.create({
      component: AlissonPage

    });

    return await modal.present();
  }

}
