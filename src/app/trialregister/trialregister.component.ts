import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { RegistrationValidator } from '../register.validator';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trialregister',
  templateUrl: './trialregister.component.html',
  styleUrls: ['./trialregister.component.css']
})
export class TrialregisterComponent implements OnInit {
  registerForm: FormGroup;
  passwordFormGroup:FormGroup;
  submitted = false;
  value :String;

  fname: String ="";
  email: String ="";
  password:String ="";
  cpassword:String ="";

  constructor(private formBuilder: FormBuilder, private userService:UsersService,private router:ActivatedRoute) { 
    this.passwordFormGroup = this.formBuilder.group({
      password: ['', Validators.required,],
      cpassword: ['', Validators.required]
    }, {
      validator: RegistrationValidator.validate.bind(this)
    });
    this.registerForm = this.formBuilder.group({
      fname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passwordFormGroup: this.passwordFormGroup
  });
  this.router.queryParams.subscribe(
    params => {
      this.value = params.value;
    } 
  );
  }

  ngOnInit() {
  
}
// get f() { return this.registerForm.controls; }

register(registerForm) {
  // console.log(this.registerForm);
  var user = {
    fname:this.registerForm.value.fname,
    email:this.registerForm.value.email,
    password:this.registerForm.value.passwordFormGroup.password,
    cpassword:this.registerForm.value.passwordFormGroup.cpassword
  }
  // console.log(user)
  this.userService.register(user);
  this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;    
    // alert('success')
}

  }
}

