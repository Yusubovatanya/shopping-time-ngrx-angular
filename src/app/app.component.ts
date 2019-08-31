import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/module/app-store.model';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/module/shopping-item.model';
import { LoadShoppingAction, AddItemAction, DeleteItemAction } from './store/action/shopping.action';
import { delay } from 'rxjs/operators';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-shopping-list';
  shoppingItems$: Observable<Array<ShoppingItem>>;
  loading$: Observable<boolean>;
  error$: Observable<Error>
  editId: ShoppingItem;
  loadStatus: boolean;
  isEditId: boolean;

  constructor(private store: Store<AppState>, private service: AppService) {
  }

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping.list);
    this.loading$ = this.store.select(store => store.shopping.loading).pipe(delay(2000));
    this.error$ = this.store.select(store => store.shopping.error);

    this.store.dispatch(new LoadShoppingAction());
    this.service.editElement$.subscribe((element) => {
      this.editId = element;
    })

    this.service.editStatus$.subscribe((status) => {
      this.isEditId = status;
    })
  }

  
 }
