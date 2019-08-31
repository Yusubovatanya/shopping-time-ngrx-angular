import { ShoppingState } from '../reduces/shopping.reducer';

export interface AppState {
  readonly shopping: ShoppingState
}