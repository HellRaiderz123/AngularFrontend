import { Component, OnInit } from '@angular/core';
import { SpringBootDataServiceService, AppTodo } from '../services/data/spring-boot-data-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number = this.route.snapshot.params['id'];
  desc: string;
  targetDate: Date;
  isComp: boolean;

  todo: AppTodo;

  constructor(private todoBean: SpringBootDataServiceService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUserTodoDet(this.id);
  }

  getUserTodoDet(id: number) {
    //call todo/{id} service
    this.todoBean.getTodoWithIdBean(id).subscribe(
        response => this.updateValueFromResponse(response),
        error => this.naviagateToError()
      )
  }

  updateValueFromResponse(response: AppTodo) {
    console.log(response);
    this.desc = response.desc;
    this.targetDate = response.pendingTill;
    this.isComp = response.comp;
  }

  naviagateToError() {
    console.log('navigateting to error');
    this.router.navigate(['error'])
  }

  updateTodo() {
    this.todo = new AppTodo(this.id, this.desc, this.targetDate, this.isComp);
    console.log(this.todo);
    this.todoBean.updateTodoById(this.todo).subscribe(
      response => this.router.navigate(['todos']),
      error => console.log(error)
    )
  }

}
