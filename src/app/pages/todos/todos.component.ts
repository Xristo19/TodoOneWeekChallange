import {Component, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {TodoActions} from "../../store/todo-state/todo.action";
import {todoSelector} from "../../store/todo-state/todo.selector";
import {AsyncPipe} from "@angular/common";
import {TableComponent} from "../../shared/components/table/table.component";
import {Todo} from "../../store/todo-state/entity/todo.interface";
import {SharedDialogComponent} from "../../shared/components/dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-todos',
  imports: [
    AsyncPipe,
    TableComponent,
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  private _store = inject(Store);
  private dialog = inject(MatDialog);
  public allTodos$ = this._store.select(todoSelector);


  getTodoList(): void {
    this._store.dispatch(TodoActions.getRequest());
  }

  onToggle(todo: Todo): void {
    // const updatedTodo = { ...todo, completed: !todo.completed };
    // this._store.dispatch(TodoActions.updateRequest({ todo: updatedTodo }));
  }

  onEdit(todo: Todo): void {
    const dialogRef = this.dialog.open(SharedDialogComponent, {
      width: '400px',
      data: {
        type: 'edit',
        title: `Edit Todo ${todo.id}`,
        todo: {...todo},
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._store.dispatch(TodoActions.getEditRequest({id: todo.id, todo: result}));
      }
    });
  }


  onDelete(todo: Todo): void {
    const dialogRef = this.dialog.open(SharedDialogComponent, {
      width: '350px',
      data: {
        type: 'delete',
        title: 'Delete Confirmation',
        message: `Are you sure you want to delete "${todo.todo}"?`,
      },
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this._store.dispatch(TodoActions.deleteRequest({id: todo.id}));
      }
    });
  }


  onComplete(todo: Todo): void {
    const dialogRef = this.dialog.open(SharedDialogComponent, {
      width: '400px',
      data: {
        type: 'complete',
        title: 'Mark as Completed',
        message: `Do you really want to mark "${todo.todo}" as completed?`, // პირდაპირი ტექსტი
      },
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        const updatedTodo = {...todo, completed: true};
        this._store.dispatch(TodoActions.completeRequest({ id: todo.id, todo: updatedTodo }));
      }
    });
  }



}
