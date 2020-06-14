import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'seko-store';
  nombre = 'Axel';
  items = ['juanito', 'lila', 'axel'];

  addItem(nuevoItem: string) {
    this.items.push(nuevoItem)
  }
  delteItem(index: number){
    this.items.splice(index, 1);
  }
}
