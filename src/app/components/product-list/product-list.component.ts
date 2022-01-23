import { Component, OnInit , Input} from '@angular/core';
import { Product} from 'src/app/models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() product: Product = {
    name: 'test',
    id: 'test',
    price: 'test',
    url: 'http://netlify.com',
    image: 'https://bit.ly/20o7MGL',
    description: 'test',
    };
  constructor() { }

  ngOnInit(): void {
  }

}
