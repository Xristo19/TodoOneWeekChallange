import {ActionCreator, createAction, props} from "@ngrx/store";
import {TodoEnum} from "./entity/todo.enum";
import {CreateTodoRequest, EditTodo, Todo, DeletedTodo} from "./entity/todo.interface";

const getRequest: ActionCreator<string, any> = createAction(TodoEnum.GET_REQUEST);
const getResponse: ActionCreator<string, any> = createAction(TodoEnum.GET_RESPONSE, props<{todos: Todo}>());
const getEditRequest: ActionCreator<string, any> = createAction(TodoEnum.PUT_REQUEST, props<{id: number, todo: EditTodo}>());
const getEditResponse: ActionCreator<string, any> = createAction(TodoEnum.PUT_RESPONSE, props<Todo>());
const completeRequest: ActionCreator<string, any> = createAction(TodoEnum.COMPLETE_REQUEST ,props<{id: number, completed: boolean}>());
const completeResponse: ActionCreator<string, any> = createAction(TodoEnum.COMPLETE_RESPONSE, props<{ todo: Todo }>());
const deleteRequest: ActionCreator<string, any> = createAction(TodoEnum.DELETE_REQUEST, props<{ id: number }>());
const deleteResponse: ActionCreator<string, any> = createAction(TodoEnum.DELETE_RESPONSE, props<{ todo: DeletedTodo }>());
const createTodoRequest: ActionCreator<string, any> = createAction(TodoEnum.POST_REQUEST, props<{ todo: CreateTodoRequest }>());
const createTodoResponse: ActionCreator<string, any> = createAction(TodoEnum.POST_RESPONSE, props<{ todo: Todo }>());

type TodoActionsTypes = {
  getRequest: typeof getRequest,
  getResponse: typeof getResponse,
  getEditRequest: typeof getEditRequest,
  getEditResponse: typeof getEditResponse,
  completeRequest: typeof completeRequest,
  completeResponse: typeof completeResponse,
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
  completeRequest,
  completeResponse,
  deleteRequest,
  deleteResponse,
  createTodoRequest,
  createTodoResponse,
}
