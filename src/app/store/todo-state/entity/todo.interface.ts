export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface CreateTodoRequest {
  todo: string;
  completed: boolean;
  userId: number;
}

export interface TodoResponse {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}

export interface EditTodo {
  todoName: string;
  completed: boolean;
  userId: number;
}

export interface TodoState {
  list: Todo[];
}

export const todoInitialState: TodoState = {
  list: []
};
