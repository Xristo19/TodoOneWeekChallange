import {ActionCreator, createAction, props} from "@ngrx/store";
import {TodoEnum} from "./entity/todo.enum";
import {Todo} from "./entity/todo.interface";
import {TodoEffect} from "./todo.effect";

const getRequest: ActionCreator<string, any> = createAction(TodoEnum.GET_REQUEST)
const getResponse: ActionCreator<string, any> = createAction(TodoEnum.GET_RESPONSE, props<Todo>())


type TodoActionsTypes = {
    getRequest: typeof getRequest,
    getResponse: typeof getResponse,
}

export const TodoActions: TodoActionsTypes = {
    getRequest,
    getResponse
}
