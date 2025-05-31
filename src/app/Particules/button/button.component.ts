import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModel ,buttonStyles} from '../../Models/Particules/Button/ButtonModel';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Output() $eventClick: EventEmitter<void> = new EventEmitter();
  @Input() disable= false
  @Input() ButtonArgs: ButtonModel = {
    class: buttonStyles.danger_outline,
    text:"testtesttesttesttest",
    type:"submit",
    disabled:false
  };
}
