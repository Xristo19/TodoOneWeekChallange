import {environments} from "../../enviroments/enviroments";
import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {
  CreateTodoRequest,
  DeletedTodo,
  EditTodo,
  Todo,
  TodoResponse
} from "../../store/todo-state/entity/todo.interface";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly API_URL = environments.api_url;
  private readonly http = inject(HttpClient)

  get(): Observable<TodoResponse> {
    return this.http.get<TodoResponse>(`${this.API_URL}/todos`).pipe(
      map(todos => todos || [])
    );
  }

  edit(id: number, todo: EditTodo): Observable<Todo> {
    return this.http.put<Todo>(`${this.API_URL}/todos/${id}`, todo);
  }

  completed(id: number, completed: boolean): Observable<Todo> {
    const body = { completed };
    return this.http.patch<Todo>(`${this.API_URL}/todos/${id}`, body);
  }

  create(todo: CreateTodoRequest): Observable<Todo> {
    return this.http.post<Todo>(`${this.API_URL}/todos/add`, todo);
  }

  delete(id: number): Observable<DeletedTodo> {
    return this.http.delete<DeletedTodo>(`${this.API_URL}/todos/${id}`);
  }
}
