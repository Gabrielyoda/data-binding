import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarDirective } from './directives/bs-navbar.directive';
import { UpperCasePipe } from './pipes/upper-case.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe'


@NgModule({
  declarations: [
    BsNavbarDirective,
    UpperCasePipe,
    CustomDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BsNavbarDirective,
    UpperCasePipe,
    CustomDatePipe
  ]
})
export class SharedModule { }
