import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { User } from '../models/user.ts';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServiceService } from './user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User[] = [];

  @Output() outputTask: EventEmitter<User> = new EventEmitter();

  constructor(
    private readonly userService: UserServiceService,
    private readonly router :Router,
  ) { }

  userForm:FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {
   
  }

  addTask(): void{
    const { username,password } = this.userForm.value;
    const user: User ={
      username: username,
      password: password
    };
    const redirectBackUrl = sessionStorage.getItem('redirectBackUrl');
    sessionStorage.setItem('USER-DATA', JSON.stringify(user))
    this.userService.setUser(user)
    .then((users) =>{
      this.router.navigateByUrl("/dashboard")
      console.log(users);
    })  
   }
}
