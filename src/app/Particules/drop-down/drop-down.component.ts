import { Component, Input } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ParticulesModule } from '../particules.module';
import { buttonStyles } from '../../Models/Particules/Button/ButtonModel';

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [ ParticulesModule,NgbDropdownModule],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.scss'
})
export class DropDownComponent {
  @Input() Options: string[] = []
  @Input() Name: string = ""
  @Input() ButtonStyle: string | buttonStyles = buttonStyles.light
  @Input() style:string ="";

  
}
