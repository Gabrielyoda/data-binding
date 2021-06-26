import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from '../template/template.module';
import { SharedModule } from '../shared/shared.module';
import { UserServiceService } from './login/user-service.service';
import { PageRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    TemplateModule,
    SharedModule,
    PageRoutingModule
  ],
  exports: [
    PagesComponent
  ],
  providers: [
    UserServiceService
  ]
})
export class PagesModule { }
