import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appGrade]',
})
export class GradeDirective {
  @Input() mark = 0;
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    if (this.mark >= 60) {
      this.el.nativeElement.style.color = 'green';
    } else {
      this.el.nativeElement.style.color = 'red';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'black';
  }
}
