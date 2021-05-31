import { Component, OnInit } from '@angular/core';
import { LoginService } from '../utils/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  email: string;

  constructor(private loginService: LoginService, private router: Router) { 
    this.username = '';
    this.password = '';
    this.email = '';
  }

  e = false;

  login() {

    if (this.username != '' && this.password != '') {
      this.loginService.login(this.username, this.password).subscribe(msg => {
        console.log(msg);
        localStorage.setItem('user', this.username);
        this.router.navigate(['/termekek']);
      }, error => {
        console.log(error);
      })
    }

    if(this.e === true) {
      this.e = false;
    } 
  }

  registration() {
    console.log(this.username);

    if(this.username != '' && this.email != '' && this.password != '') {
      this.loginService.registration(this.username, this.email, this.password).subscribe(msg => {
        console.log(msg);
      }, error => {
        console.log(error);
      })
    }
    
    if(this.e === false) {
      this.e = true;
    } 
  }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
      this.loginService.logout().subscribe(msg => {
        console.log(msg);
      }, error => {
        console.log(error);
      })
    }
  }

}
