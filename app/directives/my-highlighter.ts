import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector : '[my-highlighter]'
})
export class MyHighlighterDirective {
    constructor(private _elemRef : ElementRef) {
        
    }
    @HostListener('click') 
    click() {
        // this._elemRef.nativeElement.style.background = "red";
    }
}