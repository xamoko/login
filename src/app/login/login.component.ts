import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { NgZone } from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  usuario;
  password;
  token;
  resToken;
  ip;
  log: string = "" ;
  alertCtrl;
  observer;
 
  constructor( private router:Router, public http: Http, private ngZone: NgZone){}
  ngOnInit() {
  }
  handleClick() {
    
  }
  /* En esta parte estamos validando los datos para poder loguearnos */
  login(form: NgForm){
    /* console.log(form.value);
    if(form.value.usuario==='Admin' && form.value.password==='Admin')
    {
      localStorage.setItem('Admin', form.value.usuario);
      this.router.navigate(['inicio']);
    } */

    let url = 'http://198.50.116.250/apinetwork/public/index.php/api/login';

    let headers2 = new Headers();
    headers2.append('Content-Type', 'application/json');
    headers2.append('Access-Control-Allow-Origin' , '*');
    headers2.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers2.append('Content-Type','application/x-www-form-urlencoded');
    headers2.append("Access-Control-Expose-Headers", "xsrf-token");
    headers2.append("Access-Control-Max-Age", "3600");
    headers2.append("Access-Control-Allow-Headers", "X-PINGOTHER,Content-Type,X-Requested-With,accept,Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization");
    headers2.append("Access-Control-Allow-Credentials", "true"); 

    let data = {
      name: form.value.usuario,
      password: form.value.password
    };

    console.log("Inicio de Login...");
    console.log(data);
    this.http.post(url, JSON.stringify(data) , {headers: headers2})
        .subscribe((data) => {
            this.resToken = data.json();
            this.token = this.resToken.token;
            console.log(this.resToken.status);
            console.log(this.token);
            console.log(this.resToken.id);
            if(this.resToken.status ==='succes')
            {
              localStorage.setItem('succes', this.resToken.status);
              this.router.navigate(['inicio']);
            }else{
              console.log('datos incorrectos');
            }

            });
  }
}
