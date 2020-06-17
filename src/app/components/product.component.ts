import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

  @Input() producto: Product;
  @Output() productClicked: EventEmitter<string> = new EventEmitter();

  today = new Date();

  constructor() {
    console.log('Constructor!');
  }

  // ngOnChanges(changes: SimpleChanges){
  //   console.log('ngOnChanges');
  // }

  ngOnInit() {
    console.log('ngOnInit!');
  }

  ngDoCheck() {
    console.log('DoCheck');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  addCart(nombre: string){
    console.log(`Añadido al carrito producto ${nombre}`);
    this.productClicked.emit(this.producto.id);
  }
}
