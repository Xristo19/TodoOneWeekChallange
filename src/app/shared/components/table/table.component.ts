import {Component, EventEmitter, Input, Output} from "@angular/core";
import {CreateTodoRequest, Todo} from "../../../store/todo-state/entity/todo.interface";
import {CommonModule} from "@angular/common";
import {HoverDirective} from "../../directives/hover.directive";
import {TodoActions} from "../../../store/todo-state/todo.action";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.scss",
  imports: [CommonModule, HoverDirective, FormsModule, ReactiveFormsModule]
})
export class TableComponent {
  @Input() todoText =  new FormControl('')
  showCreateButton: boolean = false;
  @Input() todos: Todo[] | null = []
  @Output() editTodo = new EventEmitter<Todo>();
  @Output() createTodo = new EventEmitter<string>();
  @Output() deleteTodo = new EventEmitter<Todo>();
  @Output() toggleTodo = new EventEmitter<Todo>();

  onEdit(todo: Todo): void {
    this.editTodo.emit(todo);
  }

  onDelete(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }

  onToggle(todo: Todo): void {
    this.toggleTodo.emit(todo);
  }

  onInputChange(): void {
    this.showCreateButton = !!this.todoText.value?.trim();
  }

  onCreate() {
    const trimmedText = this.todoText.value?.trim();
    if (trimmedText) {
      this.createTodo.emit(trimmedText);
    }
  }
}
