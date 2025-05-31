import { Component, Input } from '@angular/core';
import { InputModel } from '../../Models/Particules/Input/InputModel';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './old-input.component.html',
  styleUrl: './old-input.component.scss'
})
export class oldInputComponent {
  @Input() InputModel :InputModel = {class:"form-control",type:"",Name:"",placeholder:""}
}