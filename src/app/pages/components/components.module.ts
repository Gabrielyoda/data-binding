import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { ProdutcComponent } from './produtc/produtc.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CarouselComponent,
    BenefitsComponent,
    ProdutcComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    CarouselComponent,
    BenefitsComponent,
    ProdutcComponent
  ]
})
export class ComponentsModule { }
