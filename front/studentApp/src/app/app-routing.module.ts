import { NotFoundComponent } from './not-found/not-found.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { TestApiComponent } from './test-api/test-api.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileCompComponent } from './profile_page/profile-comp/profile-comp.component';
import { AppComponent } from './app.component';
import { LoginComp } from './login_page/login-comp.components';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListstudentComponent } from './liststudent/liststudent.component';

const routes: Routes = [
  { path: 'login', component: LoginComp },
  { path: '', component: ListstudentComponent },
  // { path: '', component: AppComponent },
  {
    path: 'students',
    component: ListstudentComponent,
  },
  { path: 'students/:id', component: ProfileCompComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'test-api/:name', component: TestApiComponent },
  { path: 'add', component: AddstudentComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
