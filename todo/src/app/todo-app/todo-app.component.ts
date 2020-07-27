import { Component, OnInit } from '@angular/core';
import { SpringBootDataServiceService, AppTodo, AppTodos } from '../services/data/spring-boot-data-service.service';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';


@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})

export class TodoAppComponent implements OnInit {

  todos: AppTodo[];

  desc: string;
  pendingTill: Date;
  comp: boolean;

  constructor( private todoBean: SpringBootDataServiceService, private route: Router) { }

  ngOnInit(): void {
    //console.log(this.welcomeComp.username);
    //Calling service to get Todos
    this.todoBean.getTodoBean().subscribe(
     response => this.updateTodoList(response.alTodoList)
    );
  }

  updateTodoList(todos: Array<AppTodo>) {
    this.todos = todos;
  }

  deleteId(event) {
    //console.log(event.target.id);
    //Calling delete service here
    this.todoBean.deleteTodoBean(event.target.id).subscribe(
      response => this.ngOnInit(),
      error => this.ngOnInit()
    )
  }

  updateId(id: number) {
    this.route.navigate(['todo',id])
  }

  insertTodo() {
    //Check condition
    if(this.desc==undefined || this.desc.length===0) {
      alert("Please enter the Description of Todo");
      return false;
    }
    let todo: AppTodo = {"comp": this.comp, "desc" : this.desc, "pendingTill" : this.pendingTill, "id" : 0};
    todo.desc = this.desc;
    todo.comp = this.comp;
    todo.pendingTill = this.pendingTill;
    this.todoBean.insertTodo(todo).subscribe(
      response => this.ngOnInit(),
      error => this.ngOnInit()
    );
  console.log(todo);
   }

   clearValues() {

   }

}
