import {environments} from "../enviroments/enviroments";
import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Todo} from "../store/todo-state/entity/todo.interface";

@Injectable({
  providedIn: 'root', // Registers the service globally
})
export class TodoService{
  private readonly API_URL = environments.api_url;
  private readonly http = inject(HttpClient)

  get():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.API_URL}/todos`).pipe(
      map(todos => todos || [])
    );
  }

}
