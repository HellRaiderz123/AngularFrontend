import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpringBootDataServiceService } from '../services/data/spring-boot-data-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessage : string;
  username : string = this.route.snapshot.params['name'];
  showTodo: boolean = false;

  //Dependency injection to read the parameter of url reqirection
  constructor(
    private route: ActivatedRoute,
    private httpService: SpringBootDataServiceService
    ) { }

  ngOnInit(): void {
    //this.getWelcomeData(this.username);
    this.httpService.getHelloWorldBean(this.username).subscribe(
           response => this.welcomeMessage=response.message,
           error => this.welcomeMessage=error.error.message
         );
  }
  
  getTodos() {
    this.showTodo === true ? this.showTodo = false : this.showTodo = true;
  }

  // getWelcomeData(username: string) {
  //   this.httpService.getHelloWorldBean(username).subscribe(
  //     response => this.welcomeMessage=response.message
  //   );
  // }

  // helloWorldRequestHandler (response) {
  //   this.welcomeMessage=response.message;
  // }

}
