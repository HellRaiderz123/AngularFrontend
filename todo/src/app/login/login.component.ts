import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Dependecy Injecttion of Router
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  username : string = "developer";
  password : string = "";
  invalidUser = false;
  
  loginHandler() {
    // console.log(this.username);
    if(this.username==='developer' && this.password==='pass') {
      this.invalidUser = false;
      //Logic to redirect to welcome page
      this.route.navigate(['welcome',this.username]);
    } else {
      this.invalidUser = true;
    }
  }

}
