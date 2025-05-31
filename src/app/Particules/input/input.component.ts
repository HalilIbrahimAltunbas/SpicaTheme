import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import {SpicaErrorStateMatcher} from "./SpicaErrorStateMatcher"
import { FormInputModel } from '../../Models/Particules/FormInput/InputModel';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() InputModel : FormInputModel = {
    class:"form-control",
    type:"",
    Name:"",
    placeholder:"",
    Control: new FormControl()
  }
  //emailFormControl = new FormControl('', [Validators.required, Validators.email]);
   
  matcher = new SpicaErrorStateMatcher();
}
