import { Component, Input } from '@angular/core';
import { DropDownComponent } from '../../../Particules/drop-down/drop-down.component';
import { NavBarElement } from '../../../Models/Default/NavModel/NavBarElement';


@Component({
  selector: 'app-left-nav-bar',
  standalone: true,
  imports: [DropDownComponent],
  templateUrl: './left-nav-bar.component.html',
  styleUrl: './left-nav-bar.component.scss'
})
export class LeftNavBarComponent {
  @Input() ElementList : NavBarElement[] = []
  p(element : NavBarElement):string[]{
    return ["a","b"]
    //return element.options.map((a,b)=> {return a.Name})
  }
}
