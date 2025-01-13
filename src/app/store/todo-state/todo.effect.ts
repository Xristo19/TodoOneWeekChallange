import {inject} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TodoService} from "../../shared/services/todo.service";
import {TodoActions} from "./todo.action";
import {catchError, EMPTY, map, mergeMap} from "rxjs";
import {CreateTodoRequest, Todo, TodoResponse, DeletedTodo} from "./entity/todo.interface";

export class TodoEffect {
  private actions$ = inject(Actions)
  private todoService = inject(TodoService)

  getRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.getRequest),
      mergeMap(() =>
        this.todoService.get().pipe(
          map((response: TodoResponse) => {
            return TodoActions.getResponse({todos: response.todos});
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  getEditRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.getEditRequest),
      mergeMap(({id, todo}) =>
        this.todoService.edit(id, todo).pipe(
          map((updatedTodo: Todo) => TodoActions.getEditResponse(updatedTodo)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  createTodoRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.createTodoRequest),
      mergeMap(({todo}) =>
        this.todoService.create(todo).pipe(
          map((createdTodo: Todo) => TodoActions.createTodoResponse({todo: createdTodo})),
          catchError(() => EMPTY)
        )
      )
    )
  );


  completeRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.completeRequest),
      mergeMap(({id, completed}) =>
        this.todoService.completed(id, completed).pipe(
          map((updatedTodo: Todo) => TodoActions.completeResponse({todo: updatedTodo})),
          catchError((error) => {
            console.error('Error completing the todo:', error);
            return EMPTY;
          })
        )
      )
    )
  );


  deleteRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.deleteRequest),
      mergeMap(({id}) =>
        this.todoService.delete(id).pipe(
          map((deletedTodo: DeletedTodo) => TodoActions.deleteResponse(deletedTodo)),
          catchError((error) => {
            console.error('Error completing the todo:', error);
            return EMPTY;
          })
        ))
    ));
}
