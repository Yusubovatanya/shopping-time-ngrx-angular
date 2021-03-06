import { ShoppingItem } from "../module/shopping-item.model";
import { ShoppingAction, ShoppingActionTypes } from '../action/shopping.action';


export interface ShoppingState {
  list: ShoppingItem[],
  loading: boolean,
  error: Error
};


const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: undefined
}

export function ShoppingReducer(
  state: ShoppingState = initialState,
  action: ShoppingAction
) {

  switch (action.type) {
    case ShoppingActionTypes.LOAD_SHOPPING:
      return { ...state, loading: true };
    case ShoppingActionTypes.LOAD_SHOPPING_SUCCESS:
      return { ...state, list: action.payload, loading: false };
    case ShoppingActionTypes.LOAD_SHOPPING_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case ShoppingActionTypes.ADD_ITEM:
      return { ...state, loading: true };
    case ShoppingActionTypes.ADD_ITEM_SUCCESS:
      return { ...state, list: [...state.list, action.payload], loading: false };
    case ShoppingActionTypes.ADD_ITEM_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case ShoppingActionTypes.DELETE_ITEM:
      return { ...state, loading: true };
    case ShoppingActionTypes.DELETE_ITEM_SUCCESS:
      return { ...state, list: state.list.filter(item => item.id !== action.payload), loading: false };
    case ShoppingActionTypes.DELETE_ITEM_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case ShoppingActionTypes.UPDATE_ITEM:
      return { ...state, loading: true };
    case ShoppingActionTypes.UPDATE_ITEM_SUCCESS:

      const index = state.list.findIndex((item) => {
        return item.id === action.payload.id
      });
      if(index !==1 && action.payload) {
         state.list.splice(index, 1);
         return { ...state, list: [...state.list, action.payload], loading: false };
      } else {
           return state
      }
    case ShoppingActionTypes.UPDATE_ITEM_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}


