import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  clickProduct(id: number) {
    console.log(`Producto: ${id}`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
