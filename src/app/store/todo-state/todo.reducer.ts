import {createReducer, on} from "@ngrx/store";
import {TodoActions} from "./todo.action";
import {todoInitialState} from "./entity/todo.interface";

export const todoReducer = createReducer(
  todoInitialState,
  on(
    TodoActions.getResponse,
    (state, {todos}) => {
      return {...state, list: todos};
    }
  ),
  on(
    TodoActions.getEditResponse,
    (state, updatedTodo) => {
      const updatedList = state.list.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
      return {...state, list: updatedList};
    }
  ),
  on(
    TodoActions.completeResponse,
    (state, {todo}) => {
      const updatedList = state.list.map((item) =>
        item.id === todo.id ? {...item, ...todo} : item
      );
      return {...state, list: updatedList};
    }
  ),
  on(
    TodoActions.createTodoResponse,
    (state, {todo}) => {
      const updatedList = [todo,...state.list];
      return {...state, list: updatedList};
    }
  ),
  on(
    TodoActions.deleteResponse,
    (state, {id}) => {
      const updatedList = state.list.filter((todo) => todo.id !== id);
      return {...state, list: updatedList};
    }
  )
);

