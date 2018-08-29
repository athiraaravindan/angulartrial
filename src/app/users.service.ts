import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {  FormGroup } from '@angular/forms';
import { TrialregisterComponent } from './trialregister/trialregister.component';
// import { RegisterComponent } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  registerForm: FormGroup;
 
  constructor(private http: HttpClient ,private router: Router) { }

  register(user){
    console.log(user);
  
    this.http.post('http://localhost:3000/register1',user)
    .subscribe( (data:any) => {
      // console.log(data.status);
      if(data.status == 'email exit'){
        this.router.navigate(['/register'],{queryParams: {value:'email already exit..'}});
      } else{
        this.router.navigate(['/login']);
      } 
    // this.Items = data;
    //  this.router.navigate(['/register',{ message:"register failed"}]);
    // console.log(data.status); 
    }) 
    // };
  } 
  
}

