import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TemplateModule } from '../template/template.module';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    TemplateModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
