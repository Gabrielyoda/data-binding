import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'challenge-angular';
  images = ["assets/carousel-1.png", "assets/carousel-2.png", "assets/carousel-3.png"];
}
