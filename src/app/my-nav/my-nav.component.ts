import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from '../models/users';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {
  Users : Array<Users>;

  constructor(private breakpointObserver: BreakpointObserver, private http: Http, private router: Router) {
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(resp => this.Users = resp.json());
  }

  logout(){
    localStorage.removeItem('succes');
    this.router.navigate(['']);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  
  
  }
