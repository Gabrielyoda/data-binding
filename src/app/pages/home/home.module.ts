import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { BenefitsComponent } from '../components/benefits/benefits.component';
import { ProdutcComponent } from '../components/produtc/produtc.component';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../components/components.module';




@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class HomeModule { }
