import {Component} from '@angular/core';
import {TodosComponent} from "./pages/todos/todos.component";
import {HeaderComponent} from "./layout/background/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    TodosComponent,
    HeaderComponent,
  ],
  standalone: true
})
export class AppComponent {

}
