import {ActionReducer} from "@ngrx/store";
import {TodoState} from "../../todo-state/entity/todo.interface";

export type AppReducers = {
  todos: ActionReducer<TodoState>
}
