import { Component, OnInit } from '@angular/core';
import { User } from './models/user.ts';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  user:User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAddTask(user: User): void{
    this.user.push(user);
    console.log(user);
  }

}
