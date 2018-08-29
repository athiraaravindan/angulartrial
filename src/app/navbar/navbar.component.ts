import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { LoginsService } from '../logins.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  img:any;
  user_image:any;
  @Input() book: Book;

  constructor(private loginService: LoginsService, private router:Router, private cookie:CookieService, private http:HttpClient) { }

  ngOnInit() {
   
    this.img = JSON.parse( localStorage.getItem('loginId'));
    this.user_image = this.img.image;
    // console.log(this.user_image);
  }
  logout(){
    localStorage.removeItem("loginId");
    this.cookie.delete('mycookie');
    this.router.navigate(['/login'])

  }
 

}
