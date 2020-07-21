import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //Dependency injection to read the parameter of url reqirection
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  username : string = this.route.snapshot.params['name'];
  showTodo: boolean = false;
  
  getTodos() {
    this.showTodo === true ? this.showTodo = false : this.showTodo = true;
  }

}
