import { ChangeDetectionStrategy, Component, EventEmitter } from '@angular/core';
import { NavigationBarComponent } from "../navigation-bar/navigation-bar.component";
import { DropDownNavBarElement } from '../../Models/Default/NavModel/DropDownNavBarElement';
import { LinkNavBarElement } from '../../Models/Default/NavModel/LinkNavBarElement';
import { ToggleNavBarElement } from '../../Models/Default/NavModel/ToggleNavElement';
import { NavBarElement } from '../../Models/Default/NavModel/NavBarElement';
import { SideBarComponent } from "../../Molecules/side-bar/side-bar.component";
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ContentComponent } from '../content/content.component';
import { ComponentToggleNavBarElement } from '../../Models/Default/NavModel/ComponentToggleNavElement';
import { ProfileComponent } from '../../Molecules/Collapse/profile/profile.component';
let subject = new BehaviorSubject<boolean>(false)
// to do : buraya servis yapısı inşa edilecek servis içinden bu
// işlem yapılacak
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavigationBarComponent, ContentComponent, SideBarComponent,AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  _subject;
  $sidebarCallopse = subject.asObservable();
  
  /**
   *
   */
  constructor() {
    this._subject = subject
    
  }

  leftlist: NavBarElement[] =[
    // new LinkNavBarElement({
      // link:"a",
      // Name:"a",
    // }),

    // new LinkNavBarElement({
      // link:"b",
      // Name:"b",
    // }),


    new ToggleNavBarElement({
      href: "../../../assets/hamburger-sidebar-open.svg",
      Function: this.sidebarCallopse,
      FunctionName:"test"
    }),
    // new ToggleNavBarElement({
    //   href:"../../../assets/hamburger-sidebar-close.svg",
    //   Function: this.sidebarCallopse,
    //   FunctionName:"test"
    // }),
    new DropDownNavBarElement({
     
      Name:"ctestestsest",
      options:[
        new LinkNavBarElement(
        {
          link:"/cd",
          Name:"cd",
        }),
        new LinkNavBarElement(
          {
            link:"/ce",
            Name:"ce",
          }),
      ]
    }),
    new DropDownNavBarElement({
      Name:"f",
      options:[
        new LinkNavBarElement(
        {
          link:"/fg",
          Name:"fg",
        }),
        new LinkNavBarElement(
          {
            link:"/fh",
            Name:"fh",
          }),
      ]
    }),

    new ComponentToggleNavBarElement({
      href:"../../../assets/wallet-solid.svg",
      componentType: ProfileComponent
    })
   
  ]

  rightlist: NavBarElement[] =[
   
    new ToggleNavBarElement({
      href:"../../../assets/hamburger-sidebar-close.svg",
      Function: this.sidebarCallopse,
      FunctionName:"test"
    }),
    new ComponentToggleNavBarElement({
      href:"../../../assets/wallet-solid.svg",
      componentType: ProfileComponent
    })
    
  ]
  
 
  
  _sidebarCallopse:boolean = false;
  sidebarCallopse(){
    this._sidebarCallopse = !this._sidebarCallopse
    subject.next(this._sidebarCallopse)
    subject.subscribe(s=> console.log(s))
    
  }
  
}
