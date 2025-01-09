import {createReducer, on} from "@ngrx/store";
import {TodoActions} from "./todo.action";
import {todoInitialState} from "./entity/todo.interface";

export const todoReducer = createReducer(
  todoInitialState,
  on(
    TodoActions.getResponse,
    (state, {list}) => ({...state, list})
  )
)

