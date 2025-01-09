export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface TodoState {
  list: Todo[];
}

export const todoInitialState: TodoState = {
  list: []
};
