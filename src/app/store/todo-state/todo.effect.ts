import {inject} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TodoService} from "../../shared/services/todo.service";
import {TodoActions} from "./todo.action";
import {catchError, EMPTY, map, mergeMap} from "rxjs";
import {Todo, TodoResponse} from "./entity/todo.interface";

export class TodoEffect {
  private actions$ = inject(Actions)
  private todoService = inject(TodoService)

  getRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.getRequest),
      mergeMap(() =>
        this.todoService.get().pipe(
          map((response: TodoResponse) => {
            return TodoActions.getResponse({ todos: response.todos });
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
}
