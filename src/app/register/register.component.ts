import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // registerForm: any;
  
  fname: String ="";
  email: String ="";
  password:String ="";
  cpassword:String ="";


  constructor( private userService: UsersService) {
    // console.log(this.data); 
    // this.registerForm = this.formBuilder.group({
    //   'name': ['', Validators.required],
    //   'email': ['', Validators.required],
    //   'password': ['', Validators.required]
          
    // });
    
  }

  ngOnInit() {

  }
  register(user){
    // console.log(user);
    this.userService.register(user);
  }
  


}
