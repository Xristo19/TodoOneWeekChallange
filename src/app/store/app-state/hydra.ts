import {ActionReducer, INIT} from '@ngrx/store';
import {InitialState} from './state';

export const hydrationMetaReducer = (reducer: ActionReducer<InitialState>): ActionReducer<InitialState> => {
  return (state, action) => {
    if (action.type === INIT) {
      const storageValue = localStorage.getItem("state");
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem("state");
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem("state", JSON.stringify(nextState));
    return nextState;
  };
}
