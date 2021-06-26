import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.ts';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServiceService } from '../login/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  

  constructor() { }

  userForm:FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  
  ngOnInit(): void {
  }

  addTask(): void{
    
   }
}
