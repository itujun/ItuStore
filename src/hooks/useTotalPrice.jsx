import { useContext } from 'react';
import { TotalPriceContext } from '../contexts/TotalPriceContext';

export function useTotalPrice() {
  return useContext(TotalPriceContext);
}
