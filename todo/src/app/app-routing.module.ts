import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'welcome/:name', component:WelcomeComponent, canActivate: [RouteGuardService]},
  {path: 'todos', component:TodoAppComponent, canActivate: [RouteGuardService]},
  {path: 'logout', component:LogoutComponent, canActivate: [RouteGuardService]},
  {path: 'todo/:id', component: TodoComponent, canActivate: [RouteGuardService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
