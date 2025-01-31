import {
  CommonModule,
  NgFor,
  NgIf,
  NgStyle,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { CapitalizePipe } from '../../core/pipes/capitalize.pipe';

@Component({
  selector: 'app-products',
  imports: [
    NgFor,
    UpperCasePipe,
    TitleCasePipe,
    NgIf,
    NgStyle,
    CommonModule,
    CapitalizePipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  subTitle = 'home-products';
  products = [
    {
      id: 1,
      name: 'toothpaste',
      desc: 'a bathroom product',
      inStock: true,
    },
    {
      id: 2,
      name: 'brush',
      desc: 'a brush teeth',
      inStock: false,
    },
    {
      id: 3,
      name: 'pen',
      desc: 'instrument to write with',
      inStock: true,
    },
    {
      id: 4,
      name: 'paper',
      desc: 'something to write on',
      inStock: false,
    },
  ];
  value = 1.1446;
  percentage = 0.98;
  company = 'microsoft';
  state = 'hyderabad';
  arr = [20, 30, 40, 50, 60];
  person = {
    name: 'Gopesh Sharma',
    age: '56',
    place: 'Gainesville, VA',
  };
}
