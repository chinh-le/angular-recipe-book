import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';//contains directives: ngClass, ngModel, ngStyle, ngIf,... and should be used in all Modules other than AppModule, since AppModule already has BrowserModule imported

import { DropdownDirective } from './dropdown.directive';

@NgModule({
    // components, directives, or pipes to share, can only be declared once in the app
    declarations: [
        DropdownDirective
    ],
    imports: [
        // CommonModule
    ],
    // make available outside of the module
    exports: [
        CommonModule, //shall be imported in 'imports' but not required
        DropdownDirective
    ]
})
export class SharedModule {}