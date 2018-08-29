import { Component, OnInit } from '@angular/core';
import { LoginsService } from '../logins.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  value :String ='';
  val:String ='';

  

  constructor(private loginService: LoginsService, private formBuilder: FormBuilder, private router: ActivatedRoute,) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
  });
  this.router.queryParams.subscribe(
    params => {
      this.value = params.value;
    } 
  );
  this.router.queryParams.subscribe(
    params => {
      this.val = params.val;
    } 
  );
  }

 

  ngOnInit() {
   
  }
  // get f() { return this.loginForm.controls; }
  // login(usr){
  //   this.loginService.login(usr);
  //   console.log(usr);
  // }
  login(loginForm) {
    // console.log(this.registerForm);
      this.submitted = true;
      this.loginService.login(this.loginForm);
  
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
          
      // alert('success')
  }
  
    }
}
