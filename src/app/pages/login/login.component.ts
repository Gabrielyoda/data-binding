import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { User } from '../models/user.ts';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from './user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  user:User[] = [];

  @Output() outputTask: EventEmitter<User> = new EventEmitter();

  constructor(
    private readonly userService: UserServiceService,
    private readonly router :Router,
  ) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl(null , [Validators.required]),
      password: new FormControl(null , [Validators.required])
    })
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

   getErrors(formControlName: string): string[]{
    const control : AbstractControl = this.userForm.get(formControlName) as AbstractControl;
    const errors = control.errors;

    if(control.invalid && (control.dirty || control.touched) && errors ) {
      return Object.keys(errors).map(key => {
        return `${formControlName} ${key} ${errors[key]}`;
      });
    }
    else{
      return [] as string[];
    }
  }
}
