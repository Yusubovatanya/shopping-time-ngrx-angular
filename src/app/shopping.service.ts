import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { delay, catchError } from 'rxjs/operators';
import { ShoppingItem } from './store/module/shopping-item.model';
import { Observable, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private SHOPPING_URL = "http://localhost:3000/shopping";


  constructor(private http: HttpClient) { }

  getShoppingItems() {
    return this.http.get<ShoppingItem[]>(this.SHOPPING_URL)
      .pipe(
        delay(500)
      )
  }

  addShoppingItems(shoppingItem: ShoppingItem) {
    return this.http.post(this.SHOPPING_URL, shoppingItem).
      pipe(
        delay(500)
      )
  }

  deleteShoppingItems(id: string) {
    return this.http.delete(`${this.SHOPPING_URL}/${id}`).
      pipe(
        delay(500)
      )
  }

  updateShoppingItems(shoppingItem: ShoppingItem) {
    return this.http.put(`${this.SHOPPING_URL}/${shoppingItem.id}`, shoppingItem)
      .pipe(
        delay(500)
      );
  }

}
