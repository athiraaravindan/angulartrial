import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
// import { RoleGuard } from './role-guard.service';

import { LoginsService} from './logins.service';
import { RoleGuard } from './role-guard.service';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TrialregisterComponent } from './trialregister/trialregister.component';
import { ListuserComponent } from './listuser/listuser.component';
import { EditComponent } from './edit/edit.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path : '', component: AppComponent},
  { path: 'books', component: BooksComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register', component:TrialregisterComponent},
  { path : 'login', component:LoginComponent },
  { path : 'registertrial', component:RegisterComponent},
  { path : 'listuser', component:ListuserComponent, canActivate:[RoleGuard]},
  { path :'edit/:id',component:EditComponent,canActivate: [AuthGuard]},
  { path : 'fileupload',component:FileuploadComponent},
  { path : 'pagenotfound',component:PageNotFoundComponent,canActivate: [AuthGuard]},
  { path : '**', component:PageNotFoundComponent,canActivate: [AuthGuard]}

 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
