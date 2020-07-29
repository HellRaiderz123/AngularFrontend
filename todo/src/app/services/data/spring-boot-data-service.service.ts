import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_URL } from 'src/app/urlConst';

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
    // return this.http.get<HelloWorld>(APP_URL+'hello/'+username, {headers});
    return this.http.get<HelloWorld>(APP_URL+'hello/'+username);
  }

  getTodoBean() {
    return this.http.get<AppTodos>(APP_URL+'todos');
  }

  getTodoWithIdBean(id: number) {
    return this.http.get<AppTodo>(APP_URL+'todo/'+id);
  }

  deleteTodoBean(id: number) {
    return this.http.delete(APP_URL+'todo/delete/'+id);
  }

  updateTodoById(todo: AppTodo) {
    return this.http.post(APP_URL+'todo/update', todo);
  }

  insertTodo(todo: AppTodo) {
    return this.http.post(APP_URL+'todo/insert', todo);
  }

  basicAuthHeaderEncoding() : string{
    let username = 'developer';
    let password = 'pass';
    let encodedAuthHeader: string = 'Basic ' + window.btoa(username + ':' + password);
    return encodedAuthHeader;
  }
}
