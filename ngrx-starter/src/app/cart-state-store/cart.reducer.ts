import { ActionReducer, createReducer, INIT, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Product } from '../product';
import { addProduct } from './cart.actions';

export const initialCartEntries: Product[] = [];

export const cartReducer = createReducer(
  initialCartEntries,
  on(addProduct, (state, product) => {
    const newState = structuredClone(state);
    newState.push(product);
    return newState;
  })
);

export const metaReducerLocalStorage = (
  reducer: ActionReducer<any>
): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === INIT) {
      // check localStorage -> populate my store if there's relevant value
      const storageValue = localStorage.getItem('my-cool-store-state');
      if (storageValue) {
        try {
          console.log('update or init');
          return JSON.parse(storageValue);
        } catch (error) {
          localStorage.removeItem('my-cool-store-state');
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('my-cool-store-state', JSON.stringify(nextState));
    return nextState;
  };
};
