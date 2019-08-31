import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingItem } from '../store/module/shopping-item.model';
import { AppState } from '../store/module/app-store.model';
import { Store } from '@ngrx/store';
import { UpdateItemAction, ShoppingActionTypes } from '../store/action/shopping.action';
import { AppService } from '../app.service';
import { Actions, ofType } from '@ngrx/effects'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  editId: string;
  @Input() shoppingItem: ShoppingItem;
  isShowAlert: boolean;
  msg = {
    text: "",
    result: true
  }
  successMsg$: Subscription;
  errorMsg$: Subscription;

  constructor(private store: Store<AppState>, private service: AppService, private actions$: Actions) { }
  ngOnInit() {

    this.successMsg$ = this.actions$.pipe(
      ofType<UpdateItemAction>(ShoppingActionTypes.UPDATE_ITEM_SUCCESS)
    ).subscribe(() => {
      this.isShowAlert = true;
      this.msg.text = "Data has been saved successfully!";
      this.msg.result = true;
      setTimeout(() => this.isShowAlert = false, 5000);
    }
    );

    this.errorMsg$ = this.actions$.pipe(
      ofType<UpdateItemAction>(ShoppingActionTypes.UPDATE_ITEM_FAILURE)
    ).subscribe(() => {
      this.isShowAlert = true;
      setTimeout(() => this.isShowAlert = false, 5000);
      this.msg.text = "Error!";
      this.msg.result = false;
    }
    );
  }

  cancelItem() {
    this.service.initialEditStatus(false)
  }

  updateItem() {
    this.store.dispatch(new UpdateItemAction(this.shoppingItem));
  }

  ngOnDestroy(): void {
    this.successMsg$.unsubscribe();
    this.errorMsg$.unsubscribe();
  }
}
