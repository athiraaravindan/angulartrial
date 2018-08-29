import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
// import { AuthGuard } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class LoginsService {
  users : any;
  Items:any;
  val:any;
  user:any;
  id:any;
  userrole:any;
  role:any;

  constructor( private http: HttpClient ,private router: Router, private cookie:CookieService) { }

  login(loginForm){
    // console.log(loginForm);
    this.http.post('http://localhost:3000/login1',loginForm.value)
    .subscribe( (data:any) => {
    if(data.status == 'login successfully'){
          this.router.navigate(['/books']);
          // this.cookie.set('mycookie',data.token);

          let user= JSON.stringify(data);
          localStorage.setItem('loginId', user);
          
         
          //  console.log(this.userrole.role);
      this.router.navigate(['/books'],{queryParams:{user:data.name}});
        
    }
    else if(data.status == 'password not matching'){
      this.router.navigate(['/login'], {queryParams: {value:'password not matching'}});
    }
    else if(data.status == 'user not found'){
      this.router.navigate(['/login'],{queryParams :{val:'user not found'}});
    }
    else {
      this.router.navigate(['']);
    }
    
    // console.log(data.status); 
    }) 
    };
    getToken() {
      return localStorage.getItem("loginId")
    }
    isLoggednIn() {
      return this.getToken() !== null;
    }
    //  getRole(){
      
    //   return this.userrole;
    //  }
    //  isAdmin(){
    //    this.userrole = JSON.parse(localStorage.getItem("loginId"))
    //    this.role = this.userrole.role;
    //    return this.role ==2;
    //  }
     
  
    getAllusers(){
     return this.http.get('http://localhost:3000/get-users')
      
    }
    deleteUser(id){
      // console.log(id);
      return this.http.post('http://localhost:3000/delete',{id:id})
    }
    
  }
