import {inject} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TodoService} from "../../shared/services/todo.service";
import {TodoActions} from "./todo.action";
import {map, mergeMap} from "rxjs";
import {Todo} from "./entity/todo.interface";

export class TodoEffect {
    private actions$ = inject(Actions)
    private todoService = inject(TodoService)

    getRequest$ = createEffect(() => this.actions$.pipe(
        ofType(TodoActions.getRequest),
        mergeMap(() => this.todoService.get().pipe(
            map((list: any) => list.todos),
        )),
        map((list: Todo[]) => TodoActions.getResponse([list]))
    ))

}
