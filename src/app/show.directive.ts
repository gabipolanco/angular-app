import { Directive, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appShow]'
})
export class ShowDirective implements OnInit {

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('click') mouseClick(event: MouseEvent) {
    const element = this.eleRef.nativeElement
    if(element.classList.contains('show')) {
      this.renderer.removeClass(element, 'show')
    } else {
      this.renderer.addClass(element, 'show')
    }
  }

}
