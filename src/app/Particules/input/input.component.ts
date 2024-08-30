import { Component, Input } from '@angular/core';
import { InputModel } from '../../Models/Particules/Input/InputModel';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() InputModel :InputModel = {class:"",type:""}
}
