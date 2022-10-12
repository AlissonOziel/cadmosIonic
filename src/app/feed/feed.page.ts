import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  constructor(private navCtrl : NavController, public actionSheetCtrl: ActionSheetController ) { };



  ngOnInit() {
  }

  abrirDevs(){
    this.navCtrl.navigateForward('servico/devs');
  }

  abrirManutencao(){
    this.navCtrl.navigateForward('servico/manutencao');
  }

  abrirDesing(){
    this.navCtrl.navigateForward('servico/desing');
  }

  async abrirSheetAlisson(){
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Desenvolvedor',
      subHeader: 'Análista de Sistemas',

      buttons: 
      [
        {
          text : 'Instagram',
          role : 'desctrutive',
          icon: 'logo-instagram',
        },
        {
          text : 'Facebook',
          role : 'desctrutive',
          icon: 'logo-facebook',
        
        },
        {
          text : 'Ver Mais',
          role : 'desctrutive',
          icon: 'add-circle-outline',
        }
      ]
      
    });
    
    await actionSheet.present();
  }

  async abrirSheetDouglas(){
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Desenvolvedor',
      subHeader: 'Designer',

      buttons: 
      [
        {
          text : 'Instagram',
          role : 'desctrutive',
          icon: 'logo-instagram',
        },
        {
          text : 'Facebook',
          role : 'desctrutive',
          icon: 'logo-facebook',
        
        },
        {
          text : 'Ver Mais',
          role : 'desctrutive',
          icon: 'add-circle-outline',
        }
      ]
      
    });
    
    await actionSheet.present();
  }

  async abrirSheetJoao(){
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Desenvolvedor',
      subHeader: 'Técnico de Manutenção',

      buttons: 
      [
        {
          text : 'Instagram',
          role : 'desctrutive',
          icon: 'logo-instagram',
        },
        {
          text : 'Facebook',
          role : 'desctrutive',
          icon: 'logo-facebook',
        
        },
        {
          text : 'Ver Mais',
          role : 'desctrutive',
          icon: 'add-circle-outline',
        }
      ]
      
    });
    
    await actionSheet.present();
  }

}
