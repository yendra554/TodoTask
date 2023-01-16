import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    Url!: string;
  constructor(private http: HttpClient) {
    this.Url ='http://localhost:3000/task'
   }

   addTask(todo: Todo):Observable<Todo>{
    return this.http.post<Todo>(this.Url,todo);
   }

   getAllTask():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.Url);
   }

   deleteTask(todo: Todo):Observable<Todo>{
    return this.http.delete<Todo>(this.Url+'/'+todo.id);
   }

   editTask(todo: Todo):Observable<Todo>{
    return this.http.put<Todo>(this.Url+'/'+todo.id, todo);
   }

}
