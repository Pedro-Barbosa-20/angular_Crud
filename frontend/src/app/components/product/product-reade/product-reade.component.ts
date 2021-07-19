import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-reade',
  templateUrl: './product-reade.component.html',
  styleUrls: ['./product-reade.component.css']
})
export class ProductReadeComponent implements OnInit {

  products: Product[] = []; 
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productSevice: ProductService) { }

  ngOnInit(): void {
    this.productSevice.read().subscribe(products => {
      this.products = products;
      console.log(products)
    })
  }

}
