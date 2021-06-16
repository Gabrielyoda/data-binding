import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { FooterComponent } from './components/footer/footer.component'

//layouting
const LAYOUT: any = [];
const   COMPONENTS = [NavbarComponent,FooterComponent,TemplateComponent];

@NgModule({
  declarations: [
    ...LAYOUT,
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TemplateComponent
  ]
})
export class TemplateModule { }
