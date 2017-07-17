import { Item, Cart } from './models';

export const INITIAL_STATE: IAppState = {
  items: [
    { item_name: 'Pop Corn', item_price: 3 },
    { item_name: 'Snickers', item_price: 4 },
    { item_name: 'Soda', item_price: 2 }
  ],
  price: {
    'Pop Corn' : 3,
    'Snickers': 4,
    'Soda': 2
  },
  cartItems:{},
  totalCost: 0,
  discount: 0
}

export interface IAppState {
  items : [Item],
  price: {},
  cartItems: {},
  totalCost: number,
  discount: number
}
