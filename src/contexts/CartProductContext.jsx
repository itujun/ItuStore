/* eslint-disable no-case-declarations */
import { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = {
  data: JSON.parse(localStorage.getItem('cart')) || [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemInCart = state.data.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.data.push(action.payload);
      }
      localStorage.setItem('cart', JSON.stringify(state.data));
      return { ...state };

    case 'DELETE_CART':
      const itemIndex = state.data.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        if (state.data[itemIndex].qty > 1) {
          state.data[itemIndex].qty--;
        } else {
          state.data.splice(itemIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(state.data));
      }
      return { ...state };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return <CartContext.Provider value={{ cartState, dispatch }}>{children}</CartContext.Provider>;
}
