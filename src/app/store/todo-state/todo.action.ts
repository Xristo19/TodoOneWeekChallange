import {ActionCreator, createAction, props} from "@ngrx/store";
import {TodoEnum} from "./entity/todo.enum";
import {Todo} from "./entity/todo.interface";
import {TodoEffect} from "./todo.effect";

const getRequest: ActionCreator<string, any> = createAction(TodoEnum.GET_REQUEST)
const getResponse: ActionCreator<string, any> = createAction(TodoEnum.GET_RESPONSE, props<Todo>())

const deleteRequest: ActionCreator<string, any> = createAction(TodoEnum.DELETE_REQUEST, props<{ id: number }>())
const deleteResponse: ActionCreator<string, any> = createAction(TodoEnum.DELETE_RESPONSE, props<{ id: number }>())


type TodoActionsTypes = {
  getRequest: typeof getRequest,
  getResponse: typeof getResponse,
  deleteRequest: typeof deleteRequest,
  deleteResponse: typeof deleteResponse,
}

export const TodoActions: TodoActionsTypes = {
  getRequest,
  getResponse,
  deleteRequest,
  deleteResponse
}
