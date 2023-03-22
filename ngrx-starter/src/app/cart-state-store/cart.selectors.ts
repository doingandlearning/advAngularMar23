import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../product';

export const selectTotalPrice = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    // [{price: 20}] => 20
    return state.reduce((total, currentValue) => total + currentValue.price, 0);

    // map
    // reduce
    // foreach
    // filter

    // for loop
    // while
    //
  }
);
