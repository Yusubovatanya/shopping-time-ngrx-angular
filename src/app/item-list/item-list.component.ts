import { Component, OnInit, Input } from '@angular/core';
import { ShoppingItem } from '../store/module/shopping-item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() shoppingItems: ShoppingItem[];

  constructor() { }

  ngOnInit() {
  }

}
