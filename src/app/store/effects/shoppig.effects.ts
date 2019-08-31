import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects'
import { ShoppingActionTypes, LoadShoppingAction, LoadShoppingFailureAction, 
  AddItemAction, DeleteItemAction, DeleteItemSuccessAction, DeleteItemFailureAction, 
  UpdateItemSucсessAction, UpdateItemAction, UpdateItemFailureAction, AddItemFailureAction, 
 LoadShoppingSuccessAction, 
 AddItemSuccessAction} from '../action/shopping.action';
import { ShoppingService } from 'src/app/shopping.service';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ShoppingEffects {

  @Effect() loadShopping$ = this.actions$.pipe(
    ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
    mergeMap(() => this.shoppingService.getShoppingItems()
      .pipe(
        tap(e => console.log(e)),
        map(data => new LoadShoppingSuccessAction(data)),
        catchError(error => of(new LoadShoppingFailureAction(error))
        )
      )
    )
  )

  @Effect() addShopping$ = this.actions$.pipe(
    ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
    mergeMap(
      (data => this.shoppingService.addShoppingItems(data.payload)
        .pipe(
          map(() => new AddItemSuccessAction(data.payload)),
          catchError(error => of(new AddItemFailureAction(error)))
        )
      )
    )
  );

  @Effect() deleteShopping$ = this.actions$.pipe(
    ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
    mergeMap(
      (data) => this.shoppingService.deleteShoppingItems(data.payload)
        .pipe(
          map(() => new DeleteItemSuccessAction(data.payload)),
          catchError(error => of(new DeleteItemFailureAction(error)))
        )
    ));

  @Effect() updateShopping$ = this.actions$
    .pipe(
      ofType<UpdateItemAction>(ShoppingActionTypes.UPDATE_ITEM),
      mergeMap(
        (data) => this.shoppingService.updateShoppingItems(data.payload)
          .pipe(
            map(() => new UpdateItemSucсessAction(data.payload)),
            catchError(error => of(new UpdateItemFailureAction(error)))
          )
      ));

  constructor(private actions$: Actions, private shoppingService: ShoppingService) {

  }
}