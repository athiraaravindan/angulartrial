import { Component, OnInit } from '@angular/core';
import { LoginsService } from '../logins.service';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload'
const URL = 'http://localhost:3000/fileupload';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  form: FormGroup;
  uploadformForm:FormGroup;
  id:any;
  id1:any;
  user:any;
  name:any;
  email:any;
  status:any;
  role:any;
  image:any;
  val:any;

  constructor(private loginservice:LoginsService, private router:ActivatedRoute, private route:Router, private http: HttpClient,private formBuilder: FormBuilder) {

  this.uploadformForm = this.formBuilder.group({
    image: ['',[Validators.required]]
  })
  }

  ngOnInit() {
    this.router.params.subscribe(
      params => {
        this.id = params.id;
      } 
    );
    this.router.queryParams.subscribe(
      params => {
        this.val = params.val;
      } 
    );
    this.http.get('http://localhost:3000/edit/'+this.id)
    .subscribe((data:any) => {
      this.user = data.user;
      this.name = this.user.fname;
      this.email = this.user.email;
      this.status = this.user.status;
      this.role = this.user.role;
      this.image = this.user.imagefile

      // console.log(this.name);
    });
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      let pic = JSON.parse(response);
      let imagedata = {id: this.id, picname: pic.picname,imgdelete:this.image,originalname:item.file.name}
         this.http.post('http://localhost:3000/picupload',imagedata)
         .subscribe((data: any) => {
          //  console.log(data.image);
           this.image = data.image
          //  this.route.navigate(['listuser'])
          //  this.route.navigate(['edit'],{queryParams :{val:data.image}})
         });
   
       };
   
      //  this.router.queryParams.subscribe(
      //    params => {
      //      this.id = params.id;
      //      // console.log(this.id)
         
      //   //  alert('File uploaded successfully');
      //    });
  }
  editUser(form){
    // console.log(form.value)
    let user= {id:this.id,
              fname:form.value.name,
              email:form.value.email,
              status:form.value.status,
              role:form.value.role
            }
// console.log(user)
    this.http.post('http://localhost:3000/edit',user)
    .subscribe((data:any) => {
      this.route.navigate(['listuser'])
      // console.log(data.status)
    })
    // console.log(this.form.value);
  }
 
 

}
