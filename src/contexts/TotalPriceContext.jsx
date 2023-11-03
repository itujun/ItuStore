import { createContext, useReducer } from 'react';

export const TotalPriceContext = createContext(null);
export const TotalPriceDispatchContext = createContext(null);

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE': {
      return {
        ...state,
        total: action.payload.total,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>{children}</TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}
