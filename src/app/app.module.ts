import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth-guard.service';

// import { RoleGuard } from './role-guard.service';
import { FileSelectDirective } from 'ng2-file-upload';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { FilterPipe } from './pipe';


import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessagesComponent} from './messages/messages.component';
import { BookDetailComponent} from './book-detail/book-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TrialregisterComponent } from './trialregister/trialregister.component';
import { ListuserComponent } from './listuser/listuser.component';
import { EditComponent } from './edit/edit.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    DashboardComponent,
    NavbarComponent,
    MessagesComponent,
    BookDetailComponent,
    RegisterComponent,
    LoginComponent,
    TrialregisterComponent,
    ListuserComponent,
    EditComponent,
    FileuploadComponent,
    FileSelectDirective,
    PageNotFoundComponent
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule


  ],
  providers: [CookieService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
