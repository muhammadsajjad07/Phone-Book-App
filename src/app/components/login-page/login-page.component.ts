import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email:any
  password :any
  message:any
  error:any
  success:any
  constructor(private route:Router) { }

  
  Login(){

    if(!this.email){

      this.message="Email is required!"
      this.error = true

    }
    else if(!this.password ){

      this.message="Password is required!"
      this.error = true

    }

    else if(this.email == "dev"  || this.password==1234){
      this.message="Login Succesfully"
      this.error = null
      this.success = true
      setTimeout(() => {
        this.route.navigate(['phone-book'],{
          state:{
            user:"dev"
          }
        });
        
      }, 300);

    }
    else if(this.email != "dev"  && this.password != 1234){
      this.message="Incorrect Email or Password"
      this.success = null
      this.error = true
    }
  }

  ngOnInit(): void {
  }

}
