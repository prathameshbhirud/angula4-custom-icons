import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMinimumAge]'
})
export class MinimumAgeDirective {

  private el: HTMLInputElement;
  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value) {
  }
}
