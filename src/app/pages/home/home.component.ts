import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  images = ["assets/carousel-1.png", "assets/carousel-2.png", "assets/carousel-3.png"];

  constructor() { }

  ngOnInit(): void {
  }

}
