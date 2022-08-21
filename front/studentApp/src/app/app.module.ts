import { StudentService } from './service/student.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileCompComponent } from './profile_page/profile-comp/profile-comp.component';
import { RegisterCompComponent } from './register_page/register-comp/register-comp.component';
import { HeaderCompComponent } from './header/header-comp/header-comp.component';
import { LoginComp } from './login_page/login-comp.components';
import { ProfileImgComponent } from './profile_page/profile-img/profile-img.component';
import { FormsModule } from '@angular/forms';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import { LogoutComponent } from './logout/logout.component';
import { TestApiComponent } from './test-api/test-api.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCompComponent,
    RegisterCompComponent,
    HeaderCompComponent,
    LoginComp,
    ProfileImgComponent,
    AddstudentComponent,
    UpdatestudentComponent,
    DeletestudentComponent,
    ListstudentComponent,
    LogoutComponent,
    TestApiComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [StudentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
