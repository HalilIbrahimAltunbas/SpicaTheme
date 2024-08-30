import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { InputComponent } from './input/input.component';
import { ToggleComponent } from './Toggle/Toggle';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonComponent,
    DropDownComponent,
    InputComponent,
    ToggleComponent
  ],
  exports:[
    ButtonComponent,
    DropDownComponent,
    InputComponent,
    ToggleComponent
  ]
})
export class ParticulesModule { }
