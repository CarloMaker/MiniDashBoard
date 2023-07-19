import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(loginForm : NgForm){
    const email: string = loginForm.value.email ;
    const password: string = loginForm.value.password ;

    console.log("email " + email  + " pass " + password);

  }
}
