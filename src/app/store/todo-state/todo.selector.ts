import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";
import {TodoState} from "./entity/todo.interface";

export const todoState : MemoizedSelector<any, any> = createFeatureSelector<TodoState>('todos');

export const todoSelector = createSelector(
  todoState,
  (state:TodoState) => state.list
)
