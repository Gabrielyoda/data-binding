import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { TemplateModule } from 'src/app/template/template.module';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ComponentsModule,
    TemplateModule
  ]
})
export class HomeModule { }
