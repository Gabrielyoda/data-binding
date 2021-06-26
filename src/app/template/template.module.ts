import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { FooterComponent } from './components/footer/footer.component'
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router'
//layouting
const LAYOUT: any = [];
const   COMPONENTS = [NavbarComponent,FooterComponent,TemplateComponent];

@NgModule({
  declarations: [
    ...LAYOUT,
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    TemplateComponent,
    CommonModule,
    ...LAYOUT,
    ...COMPONENTS
  ]
})
export class TemplateModule { }
