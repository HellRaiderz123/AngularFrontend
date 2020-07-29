import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HarcodedAuthServiceService } from '../services/harcoded-auth-service.service';
import { BasicAuthService } from '../services/basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Dependecy Injecttion of Router
  constructor(
    private route: Router,
    // public harcodedAuthServiceService: HarcodedAuthServiceService,
    public basicAuthService : BasicAuthService) { }

  ngOnInit(): void {
  }

  username : string = "developer";
  password : string = "";
  invalidUser = false;
  
  // loginHandler() {
  //   // console.log(this.username);
  //   if(this.harcodedAuthServiceService.authenticate(this.username, this.password)) {
  //     this.invalidUser = false;
  //     //Logic to redirect to welcome page
  //     this.route.navigate(['welcome',this.username]);
  //   } else {
  //     this.invalidUser = true;
  //   }
  // }


  basicAuthLoginHandler() {
    console.log(this.username);
    this.basicAuthService.authenticate(this.username, this.password).subscribe(
      data => {
        console.log(data)
        this.invalidUser = false
        this.route.navigate(['welcome',this.username])
      }, 

      error => {
        console.log(error)
        this.invalidUser = true;
      }
    )
    
  }

}
