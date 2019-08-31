import { ShoppingItem } from '../module/shopping-item.model';
import { Action } from '@ngrx/store';


export enum ShoppingActionTypes {
  LOAD_SHOPPING = '[ShoppingItem] Load Shopping',
  LOAD_SHOPPING_SUCCESS = '[ShoppingItem] Load Shopping Success',
  LOAD_SHOPPING_FAILURE = '[ShoppingItem] Load Shopping Failure',
  ADD_ITEM = '[ShoppingItem] Add Item',
  ADD_ITEM_SUCCESS = '[ShoppingItem] Add Item Success',
  ADD_ITEM_FAILURE = '[ShoppingItem] Add Item Failure',
  UPDATE_ITEM = '[ShoppingItem] Update Item',
  UPDATE_ITEM_SUCCESS = '[ShoppingItem] Update Item Success',
  UPDATE_ITEM_FAILURE = '[ShoppingItem] Update Item Failure',
  DELETE_ITEM = '[ShoppingItem] Delete Item',
  DELETE_ITEM_SUCCESS = '[ShoppingItem] Delete Item Success',
  DELETE_ITEM_FAILURE = '[ShoppingItem] Delete Item Failure'
}

export class LoadShoppingAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING;
}
export class LoadShoppingSuccessAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;
  constructor(public payload: Array<ShoppingItem>) { }
}
export class LoadShoppingFailureAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_FAILURE;
  constructor(public payload: Error) { }
}


export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;
  constructor(public payload: ShoppingItem) { }
}
export class AddItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;
  constructor(public payload: ShoppingItem) { }
}
export class AddItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE;
  constructor(public payload: Error) { }
}

export class UpdateItemAction implements Action {
  readonly type = ShoppingActionTypes.UPDATE_ITEM;
  constructor(public payload: ShoppingItem) { }
}
export class UpdateItemSucсessAction implements Action {
  readonly type = ShoppingActionTypes.UPDATE_ITEM_SUCCESS;
  constructor(public payload: ShoppingItem) { }
}
export class UpdateItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.UPDATE_ITEM_FAILURE;
  constructor(public payload: Error) { }
}

export class DeleteItemAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM;
  constructor(public payload: string) { }
}
export class DeleteItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_SUCCESS;
  constructor(public payload: string) { }
}
export class DeleteItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_FAILURE;
  constructor(public payload: Error) { }
}

export type ShoppingAction = AddItemAction | DeleteItemAction | AddItemSuccessAction |
  AddItemFailureAction | DeleteItemSuccessAction | DeleteItemFailureAction |
  LoadShoppingAction | LoadShoppingSuccessAction | LoadShoppingFailureAction | UpdateItemAction
  | UpdateItemSucсessAction | UpdateItemFailureAction;

