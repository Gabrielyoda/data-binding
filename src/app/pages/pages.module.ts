import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TemplateModule } from '../template/template.module';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ProdutcComponent } from './components/produtc/produtc.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    CarouselComponent,
    BenefitsComponent,
    ProdutcComponent
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
