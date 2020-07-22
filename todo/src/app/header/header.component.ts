import { Component, OnInit } from '@angular/core';
import { HarcodedAuthServiceService } from '../services/harcoded-auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //isAuthenticated : boolean = false;

  constructor(public harcodedAuthServiceService: HarcodedAuthServiceService ) { }

  ngOnInit(): void {
    //this.isAuthenticated = this.harcodedAuthServiceService.isAuthenticated();
  }

  
}
