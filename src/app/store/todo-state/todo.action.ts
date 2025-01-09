import {ActionCreator, createAction} from "@ngrx/store";
import {TodoEnum} from "./entity/todo.enum";

const getRequest: ActionCreator<string, any> = createAction(TodoEnum.GET_REQUEST)
const getResponse: ActionCreator<string, any> = createAction(TodoEnum.GET_RESPONSE)


type TodoActionsTypes = {
  getRequest: typeof getRequest,
  getResponse: typeof getResponse,
}

export const TodoActions : TodoActionsTypes = {
  getRequest,
  getResponse
}
