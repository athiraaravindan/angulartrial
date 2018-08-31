import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import jwt_decode  from "jwt-decode";


@Injectable()
export class RoleGuard implements CanActivate {
  token:any;
  role:any;

  constructor(
    private myRoute: Router){
  }
  canActivate( route:ActivatedRouteSnapshot):boolean{
    
      const userrole = JSON.parse(localStorage.getItem("loginId"))
      const token = userrole.token;
      const decodedtoken = jwt_decode(token)
      if(decodedtoken.role === 1){
        this.myRoute.navigate(['pagenotfound']);
        return false;
      }
      else{
        return true;
      }
      // console.log(this.role.role);
  }
}
