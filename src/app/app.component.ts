import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Serivços', url: '/servico', icon: 'code-working' },
    { title: 'Cadmos', url: '/cadmos', icon: 'ribbon' },
    { title: 'Portifólio', url: '/portifolio', icon: 'trophy' },
    { title: 'Equipe', url: '/equipe', icon: 'people' },
    { title: 'Contatos', url: '/contato', icon: 'paper-plane' }
  ];


}

export class ExampleComponent {
  public data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  public results = [...this.data];

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }
}
