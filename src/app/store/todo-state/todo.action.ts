import {ActionCreator, createAction, props} from "@ngrx/store";
import {TodoEnum} from "./entity/todo.enum";
import {CreateTodoRequest, EditTodo, Todo} from "./entity/todo.interface";

const getRequest: ActionCreator<string, any> = createAction(TodoEnum.GET_REQUEST);
const getResponse: ActionCreator<string, any> = createAction(TodoEnum.GET_RESPONSE, props<{todos: Todo}>());
const getEditRequest: ActionCreator<string, any> = createAction(TodoEnum.PUT_REQUEST, props<{id: number, todo: EditTodo}>());
const getEditResponse: ActionCreator<string, any> = createAction(TodoEnum.PUT_RESPONSE, props<Todo>());
const deleteRequest: ActionCreator<string, any> = createAction(TodoEnum.DELETE_REQUEST, props<{ id: number }>());
const deleteResponse: ActionCreator<string, any> = createAction(TodoEnum.DELETE_RESPONSE, props<{ id: number }>());
const createTodoRequest: ActionCreator<string, any> = createAction(TodoEnum.POST_REQUEST, props<{ todo: CreateTodoRequest }>());
const createTodoResponse: ActionCreator<string, any> = createAction(TodoEnum.POST_RESPONSE, props<{ todo: Todo }>());

type TodoActionsTypes = {
  getRequest: typeof getRequest,
  getResponse: typeof getResponse,
  getEditRequest: typeof getEditRequest,
  getEditResponse: typeof getEditResponse,
  deleteRequest: typeof deleteRequest,
  deleteResponse: typeof deleteResponse,
  createTodoRequest: typeof createTodoRequest,
  createTodoResponse: typeof createTodoResponse,
}

export const TodoActions: TodoActionsTypes = {
  getRequest,
  getResponse,
  getEditRequest,
  getEditResponse,
  deleteRequest,
  deleteResponse,
  createTodoRequest,
  createTodoResponse,
}
