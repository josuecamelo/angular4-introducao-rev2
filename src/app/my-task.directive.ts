import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import {Task} from './task';

@Directive({
  selector: '[myTask]'
})
export class MyTaskDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.innerHTML += 'conteudo inserido';
  }

}
