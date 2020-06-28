import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'seko-store';
  nombre = 'paco';
  items = ['juanito', 'lila', 'axel'];
  power = 3;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(nuevoItem: string) {
    this.items.push(nuevoItem);
  }
  delteItem(index: number){
    this.items.splice(index, 1);
  }

}
