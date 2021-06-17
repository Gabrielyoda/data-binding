import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarDirective } from './directives/bs-navbar.directive';
import { UpperCasePipe } from './pipes/upper-case.pipe'


@NgModule({
  declarations: [
    BsNavbarDirective,
    UpperCasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BsNavbarDirective,
    UpperCasePipe
  ]
})
export class SharedModule { }
