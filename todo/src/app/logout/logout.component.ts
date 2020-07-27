import { Component, OnInit } from '@angular/core';
import { HarcodedAuthServiceService } from '../services/harcoded-auth-service.service';
import { BasicAuthService } from '../services/basic-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    // public harcodedAuthServiceService: HarcodedAuthServiceService
    public basicAuthService : BasicAuthService
    ) { }

  ngOnInit(): void {
    // this.harcodedAuthServiceService.logout();
    this.basicAuthService.logout();
  }

}
