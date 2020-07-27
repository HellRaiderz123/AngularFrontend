import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorld {
  constructor(public message: string) {}
}

export class AppTodo {
  constructor (
    public id: number,
    public desc: string,
    public pendingTill: Date,
    public comp: boolean
  ) {}
}

export class AppTodos {

  constructor (public alTodoList : Array<AppTodo>) {}
}

@Injectable({
  providedIn: 'root'
})
export class SpringBootDataServiceService {

  constructor(private http: HttpClient) { }

  getHelloWorldBean(username: string) {
    // let EncodedAuth = this.basicAuthHeaderEncoding();
    // let headers = new HttpHeaders({Authorization : EncodedAuth})
    // return this.http.get<HelloWorld>('http://localhost:8080/hello/'+username, {headers});
    return this.http.get<HelloWorld>('http://localhost:8080/hello/'+username);
  }

  getTodoBean() {
    return this.http.get<AppTodos>('http://localhost:8080/todos');
  }

  getTodoWithIdBean(id: number) {
    return this.http.get<AppTodo>('http://localhost:8080/todo/'+id);
  }

  deleteTodoBean(id: number) {
    return this.http.delete('http://localhost:8080/todo/delete/'+id);
  }

  updateTodoById(todo: AppTodo) {
    return this.http.post('http://hellraider.zone:8080/todo/update', todo);
  }

  insertTodo(todo: AppTodo) {
    return this.http.post('http://hellraider.zone:8080/todo/insert', todo);
  }

  basicAuthHeaderEncoding() : string{
    let username = 'developer';
    let password = 'pass';
    let encodedAuthHeader: string = 'Basic ' + window.btoa(username + ':' + password);
    return encodedAuthHeader;
  }
}
