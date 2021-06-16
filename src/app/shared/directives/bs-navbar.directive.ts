import { Directive, HostBinding, HostListener } from '@angular/core';

enum NavbarStyle{
  transparent = 'bg-transparent',
  default = 'bg-light'
}

@Directive({
  selector: '[appBsNavbar]'
})
export class BsNavbarDirective {

  defaultStyle: string = NavbarStyle.transparent

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(){
    if(window.pageYOffset>0){
      this.defaultStyle = NavbarStyle.default
    } else {
      this.defaultStyle = NavbarStyle.transparent
    }
  }

  @HostBinding('class')
  applyStyles(): string {
    return `navbar navbar-expand-lg navbar-light fixed-top ${this.defaultStyle}`
  }

}
