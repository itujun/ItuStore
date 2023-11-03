/* eslint-disable no-case-declarations */
import { createContext, useReducer } from 'react';

export const CartContext = createContext(null);

const initialState = {
  data: JSON.parse(localStorage.getItem('cart')) || [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemInCartIndex = state.data.findIndex((item) => item.id === action.payload.id);
      if (itemInCartIndex !== -1) {
        // Item sudah ada di keranjang, jadi hanya perlu menambahkan 1 pada qty
        const updateCart = state.data.map((item, index) => {
          if (index === itemInCartIndex) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });
        localStorage.setItem('cart', JSON.stringify(updateCart));
        return { ...state, data: updateCart };
      } else {
        // Item belum ada di keranjang, jadi harus ditambahkan ke keranjang sebagai item baru
        const updateCart = [...state.data, { ...action.payload, qty: 1 }];
        localStorage.setItem('cart', JSON.stringify(updateCart));
        return { ...state, data: updateCart };
      }

    case 'DELETE_CART':
      const itemIndex = state.data.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        let updateCart;
        if (state.data[itemIndex].qty > 1) {
          // Jika qty > 1, kurangi qtynya
          updateCart = state.data.map((item, index) => {
            if (index === itemIndex) {
              return { ...item, qty: item.qty - 1 };
            }
            return item;
          });
        } else {
          // Jika qty == 1, hapus item dari keranjang
          updateCart = state.data.filter((item, index) => index !== itemIndex);
        }
        localStorage.setItem('cart', JSON.stringify(updateCart));
        return { ...state, data: updateCart };
      }
      return state;

    case 'DELETE_ALL_CART':
      // Menghapus semua item dari keranjang
      localStorage.removeItem('cart');
      return { ...state, data: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return <CartContext.Provider value={{ cartState, dispatch }}>{children}</CartContext.Provider>;
}
