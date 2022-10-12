import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public var = [
                 'Amsterdam',
                 'Buenos Aires', 
                 'Cairo', 
                 'Geneva', 
                 'Hong Kong', 
                 'Istanbul', 
                 'London', 
                 'Madrid', 
                 'New York', 
                 'Panama City'];

  public results = [...this.var];
  
 

  // handleChange(event) {
  //   const query = event.target.value.toLowerCase();
  //   this.results = this.var.filter(d => d.toLowerCase().indexOf(query) > -1);
  // }

  public produtos: { nome: string; idade: string}[];

  constructor(public navCtrl: NavController) { 

    this.produtos=[

      {nome:'Alisson', idade:'26'},
      {nome:'Alisson', idade:'26'},
      {nome:'Alisson', idade:'26'},

    ];
    
  }


  ngOnInit() {
  }

}
