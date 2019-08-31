import { Component, OnInit } from '@angular/core';
import { AddItemAction, ShoppingActionTypes } from '../store/action/shopping.action';
import { Store } from '@ngrx/store';
import { AppState } from '../store/module/app-store.model';
import { ShoppingItem } from '../store/module/shopping-item.model';
import { AppService } from '../app.service';
import { v4 as uuid } from 'uuid';
import { Actions, ofType } from '@ngrx/effects'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-form-add-item',
  templateUrl: './form-add-item.component.html',
  styleUrls: ['./form-add-item.component.css']
})

export class FormAddItemComponent implements OnInit {
  newShoppingItem: ShoppingItem = { id: '', name: '', img: "", description: "" };
  constructor(private store: Store<AppState>, private service: AppService, private actions$: Actions) { }
  msg = {
    text: "",
    result: true
  };
  isShowAlert: boolean = false;
  successMsg$: Subscription;
  errorMsg$: Subscription;

  ngOnInit() {

  }

  addItem() {
    this.newShoppingItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = { id: '', name: '', img: "", description: "" };

    this.successMsg$ = this.actions$.pipe(
      ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM_SUCCESS)).subscribe(() => {
        this.isShowAlert = true;
        this.msg.text = "Data has been added successfully!";
        this.msg.result = true;
        setTimeout(() => this.isShowAlert = false, 5000);
      });

    this.errorMsg$ = this.actions$.pipe(
      ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM_FAILURE)).subscribe(() => {
        this.isShowAlert = true;
        setTimeout(() => this.isShowAlert = false, 5000);
        this.msg.text = "Error!";
        this.msg.result = false;
      });

  }
  ngOnDestroy(): void {
    this.successMsg$.unsubscribe();
    this.errorMsg$.unsubscribe();
  }

}
