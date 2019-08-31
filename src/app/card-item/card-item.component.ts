import { Component, OnInit, Input } from '@angular/core';
import { ShoppingItem } from '../store/module/shopping-item.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/module/app-store.model';
import { v4 as uuid } from 'uuid'
import { AddItemAction, DeleteItemAction } from '../store/action/shopping.action';
import { AppService } from '../app.service';
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() shopping: ShoppingItem;

  constructor(private store: Store<AppState>, private service: AppService) { }

  ngOnInit() {
  }

  deleteItem() {
    console.log(this.shopping.id)
    this.store.dispatch(new DeleteItemAction(this.shopping.id));
  }

  editItem() {
    this.service.initialEdit(this.shopping);
    this.service.initialEditStatus(true)
  }



}
