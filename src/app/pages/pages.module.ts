import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TemplateModule } from '../template/template.module';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ProdutcComponent } from './components/produtc/produtc.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { UserServiceService } from './login/user-service.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    CarouselComponent,
    BenefitsComponent,
    ProdutcComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    TemplateModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PagesComponent
  ],
  providers: [
    UserServiceService
  ]
})
export class PagesModule { }
