import {Component, inject, OnInit} from '@angular/core';
import {MatInput} from "@angular/material/input";
import {Store} from "@ngrx/store";
import {TodoActions} from "../../store/todo-state/todo.action";

@Component({
  selector: 'app-todos',
  imports: [
    MatInput,
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{
  private _store = inject(Store)




  ngOnInit() {
    this._store.dispatch(TodoActions.getResponse)
  }

}
