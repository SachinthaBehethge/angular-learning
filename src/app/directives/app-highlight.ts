import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlight {

  @Input() appHighlight = "";

  constructor(private el: ElementRef) {
   }

   @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = this.appHighlight;

   }

   @HostListener('mouseleave') onMouseOut(){
        this.el.nativeElement.style.backgroundColor = "transparent";

   }

}
