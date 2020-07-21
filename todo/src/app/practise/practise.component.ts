import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component'

@Component ({
    selector: 'app-practise',
    templateUrl: './practise.component.html',
    styleUrls: ['./practise.component.css']
})

export class PractiseComponent {
    title:string = 'Hello! This is Practise Component';
}