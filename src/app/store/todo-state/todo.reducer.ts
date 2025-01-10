import {createReducer, on} from "@ngrx/store";
import {TodoActions} from "./todo.action";
import {Todo, todoInitialState} from "./entity/todo.interface";

export const todoReducer = createReducer(
    todoInitialState,
    on(
        TodoActions.getResponse,
        (state, sourceList) => {
            const list: Todo[] = Array.from(sourceList[0]);
            return {...state, list}
        }
    ),
  on(
    TodoActions.deleteResponse,
    (state, { id }) => {
      const updatedList = state.list.filter(todo => todo.id !== id);
      return { ...state, list: updatedList };
    }
  )
)

