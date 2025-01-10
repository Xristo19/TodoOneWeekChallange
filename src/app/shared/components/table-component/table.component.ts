import {Component, Input} from "@angular/core";
import {Todo} from "../../../store/todo-state/entity/todo.interface";
import {CommonModule} from "@angular/common";

@Component({
  selector: "app-table-component",
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.scss",
  imports: [CommonModule]
})
export class TableComponent {
  @Input() todos: Todo[] | null = []
}
