import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  sampleDate = new Date();

  constructor(
    private readonly router :Router
  ) { }

  ngOnInit(): void {
    
  }

  logout(): void{
    
    sessionStorage.removeItem("USER-DATA");
    this.router.navigateByUrl("/");
   }
}
