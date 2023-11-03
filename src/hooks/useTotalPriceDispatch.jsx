import { useContext } from 'react';
import { TotalPriceDispatchContext } from '../contexts/TotalPriceContext';

export function useTotalPriceDispatch() {
  return useContext(TotalPriceDispatchContext);
}
