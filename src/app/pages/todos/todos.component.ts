import {Component, inject, OnInit} from '@angular/core';
import {MatInput} from "@angular/material/input";
import {Store} from "@ngrx/store";
import {TodoActions} from "../../store/todo-state/todo.action";
import {todoSelector} from "../../store/todo-state/todo.selector";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-todos',
  imports: [
    MatInput,
    AsyncPipe,
    NgIf,
    NgForOf,
    JsonPipe,
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
