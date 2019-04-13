import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
    @HostBinding('class.open') isOpen = false;

    constructor() {
        // console.log('appDropdown constructor called!');
    }

    ngOnInit() {
        // console.log('appDropdown OnInit called!');
    }

    @HostListener('click') toggleOpen(evt: Event) {
        // console.log(evt);
        this.isOpen = !this.isOpen;
    }
}