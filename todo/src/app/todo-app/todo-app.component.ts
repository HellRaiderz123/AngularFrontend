import { Component, OnInit } from '@angular/core';


export class Todo {

  constructor (
    public id : number,
    public desc : string,
    public PendingTill : Date,
    public isComp : boolean
  ) {}

}

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})

export class TodoAppComponent implements OnInit {

  todos = [
    new Todo(1,'Buy Vegies', new Date(), false),
    new Todo(2,'Buy Vegies', new Date(), false),
    new Todo(3,'Buy Vegies', new Date(), false)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
