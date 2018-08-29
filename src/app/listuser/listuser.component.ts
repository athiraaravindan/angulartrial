import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginsService } from '../logins.service';
// import { FilterPipe } from '../pipe';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  // public searchString: string;
  p: number = 1;
  users:any;
  Items:any;
  data:any;
  img:any;
  id:any;
  user_image:any;
  id1:any;
  constructor(private router:ActivatedRoute, private loginservice:LoginsService ,private route:Router) { }

  ngOnInit() {
    // this.img = JSON.parse( localStorage.getItem('loginId'));

    this.loginservice.getAllusers()
    .subscribe((val:any) => {
      this.Items =val.res; 
  });
  }
  delete(user){
    if( confirm("are you sure want to delete this?")){

        window.location.reload(true);
        this.id = user._id;
        this.loginservice.deleteUser(this.id)
        .subscribe((val:any) => {
          // console.log(val.success);
          this.Items =val.res;
          // console.log(this.Items); 
      });
    }
  
  }
  edit(user){
    this.id1 = user._id;
    // this.loginservice.edit(this.id1)
    // console.log(this.id1);
    
      this.route.navigate(['edit',this.id1]);
    
  }

}
