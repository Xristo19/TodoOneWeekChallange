import {ActionCreator, createAction, props} from "@ngrx/store";
import {TodoEnum} from "./entity/todo.enum";
import {EditTodo, Todo} from "./entity/todo.interface";

const getRequest: ActionCreator<string, any> = createAction(TodoEnum.GET_REQUEST);
const getResponse: ActionCreator<string, any> = createAction(TodoEnum.GET_RESPONSE, props<{todos: Todo}>());
const getEditRequest: ActionCreator<string, any> = createAction(TodoEnum.PUT_REQUEST, props<{id: number, todo: EditTodo}>());
const getEditResponse: ActionCreator<string, any> = createAction(TodoEnum.PUT_RESPONSE, props<Todo>());
const deleteRequest: ActionCreator<string, any> = createAction(TodoEnum.DELETE_REQUEST, props<{ id: number }>());
const deleteResponse: ActionCreator<string, any> = createAction(TodoEnum.DELETE_RESPONSE, props<{ id: number }>());


type TodoActionsTypes = {
  getRequest: typeof getRequest,
  getResponse: typeof getResponse,
  getEditRequest: typeof getEditRequest,
  getEditResponse: typeof getEditResponse,
  deleteRequest: typeof deleteRequest,
  deleteResponse: typeof deleteResponse,
}

export const TodoActions: TodoActionsTypes = {
  getRequest,
  getResponse,
  getEditRequest,
  getEditResponse,
  deleteRequest,
  deleteResponse
}
