import { createContext } from 'react';

export const CartContext = createContext();
export const CartDispatchContext = createContext();

const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      return {
        ...state,
      };
    }
  }
};
