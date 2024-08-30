import { Component, Input } from '@angular/core';
import { NavBarElement } from '../../Models/Default/NavModel/NavBarElement';
import { NavBarPartComponent } from './nav-bar-part/nav-bar-part.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [LeftNavBarComponent,NavBarPartComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {

  @Input() LeftElementList : NavBarElement[] = []
   
}

