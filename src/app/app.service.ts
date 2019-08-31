import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ShoppingItem } from './store/module/shopping-item.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  private edit = new Subject<ShoppingItem>();
  editElement$ = this.edit.asObservable();

  private isEdit = new Subject<boolean>();
  editStatus$ = this.isEdit.asObservable();

  initialEdit(value: ShoppingItem) {
    this.edit.next(value);
  }

  initialEditStatus(value: boolean) {
    this.isEdit.next(value);
  }

}
