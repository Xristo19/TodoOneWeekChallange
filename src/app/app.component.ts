import {Component} from '@angular/core';
import {TodosComponent} from "./pages/todos/todos.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    TodosComponent
  ],
  standalone: true
})
export class AppComponent {

}
