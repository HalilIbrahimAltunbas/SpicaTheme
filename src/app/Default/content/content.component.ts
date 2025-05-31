import { Component } from '@angular/core';
import { ParticulesModule } from '../../Particules/particules.module';
import { InputModel, InputTypes } from '../../Models/Particules/Input/InputModel';
import { CardComponent } from '../../Molecules/card/card.component';
import { ComponentToggleComponent } from "../../Particules/component-toggle/component-toggle.component";
import { ComponentToggleNavBarElement } from '../../Models/Default/NavModel/ComponentToggleNavElement';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { InputComponent } from '../../Particules/input/input.component';
import { ProfileComponent } from '../../Molecules/Collapse/profile/profile.component';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ParticulesModule, CardComponent, ComponentToggleComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  InputModel: InputModel ={
    type:InputTypes.button,
    class :"form-control",
    Name:"Name",
    placeholder:"Name"
  }

 
}
