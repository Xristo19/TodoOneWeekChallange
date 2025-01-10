import {Component} from '@angular/core';
import {TodosComponent} from "./pages/todos/todos.component";
import {HeaderComponent} from "./layout/background/header.component";
import {TableComponent} from "./shared/components/table-component/table.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    TodosComponent,
    HeaderComponent,
    TableComponent
  ],
  standalone: true
})
export class AppComponent {

}
