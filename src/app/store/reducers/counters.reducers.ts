import { createReducer, on } from '@ngrx/store';
import {decrement, increment, reset} from "../actions/counter.actions";

export interface State {
  count: number;
}

export const initialState: State = {
  count: 0
};

export const counterReducer = createReducer(
  initialState,
  on(increment, state => ({ count: state.count + 1 })),
  on(decrement, state => ({ count: state.count - 1 })),
  on(reset, () => initialState)
);
