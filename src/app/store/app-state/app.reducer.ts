import {MetaReducer} from '@ngrx/store';
import {hydrationMetaReducer} from './hydra';
import {AppReducers} from './entity/app-state.interface';
import {todoReducer} from "../todo-state/todo.reducer";


export const appReducers: AppReducers = {
  todos: todoReducer,
}

export const metaReducers: MetaReducer[] = [hydrationMetaReducer]
