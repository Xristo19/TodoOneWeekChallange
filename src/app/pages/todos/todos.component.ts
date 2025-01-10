import {Component, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {TodoActions} from "../../store/todo-state/todo.action";
import {todoSelector} from "../../store/todo-state/todo.selector";
import {AsyncPipe} from "@angular/common";
import {TableComponent} from "../../shared/components/table-component/table.component";

@Component({
  selector: 'app-todos',
  imports: [
    AsyncPipe,
    TableComponent,
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{
  private _store = inject(Store)
  public allTodos$ = this._store.select(todoSelector)

  ngOnInit() {
    this._store.dispatch(TodoActions.getRequest)
  }

}
