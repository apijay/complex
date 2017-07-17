import { Action } from 'redux';
import { IAppState, INITIAL_STATE } from '../app.store';
import * as Actions from '../app.action';

export function rootReducer(state: IAppState, action): IAppState {

  switch(action.type) {
    case Actions.ITEM_ADDED: {
      let itemName =  action.payload.item_name;
      let itemtoAdd = {};
      if(typeof(state.cartItems[itemName]) != "undefined") {
        itemtoAdd[itemName] = state.cartItems[itemName] + 1 ;
      }else{
        itemtoAdd[itemName] = 1;
      }
      let newTotal = state.totalCost + state.price[itemName];
      let newDiscount = 0;
      if(itemName == "Snickers") {
        newDiscount = calcluateDiscount(itemtoAdd[itemName]);
      }else{
        newDiscount = state.discount;
      }
      state = {
        ...state,
        cartItems: Object.assign({}, state.cartItems, itemtoAdd),
        totalCost: newTotal ,
        discount: newDiscount
      }

      break;
    }
    case Actions.ITEM_REMOVED: {
      let itemName =  action.payload.item_name;
      let itemToRemove = {};
      let newTotal = state.totalCost;
      if(state.cartItems[itemName] > 0) {
        itemToRemove[itemName] = state.cartItems[itemName] - 1;
        newTotal = state.totalCost - state.price[itemName];
      }
      state = {
        ...state,
        cartItems: Object.assign({}, state.cartItems, itemToRemove),
        totalCost: newTotal
      }
      break;
    }
    case Actions.CHECKOUT: {
      state = Object.assign({}, state, INITIAL_STATE);
      break;
    }
  }

  // We don't care about any other actions right now.
  return state;
}

function calcluateDiscount(itemCount) {
  if(itemCount <= 3) {
    return 0
  }else{
    return (itemCount % 3) * 4;
  }
}
