import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Todo} from "../../../store/todo-state/entity/todo.interface";
import {CommonModule} from "@angular/common";
import {HoverDirective} from "../../directives/hover.directive";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.scss",
  imports: [CommonModule, HoverDirective]
})
export class TableComponent {
  @Input() todos: Todo[] | null = []
  @Output() getTodos = new EventEmitter();
  @Output() editTodo = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<Todo>();
  @Output() toggleTodo = new EventEmitter<Todo>();

  onGet(): void {
    this.getTodos.emit()
  }

  onEdit(todo: Todo): void {
    this.editTodo.emit(todo);
  }

  onDelete(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }

  onToggle(todo: Todo): void {
    this.toggleTodo.emit(todo);
  }


}
