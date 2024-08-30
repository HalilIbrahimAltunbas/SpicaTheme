import { ChangeDetectionStrategy, Component, EventEmitter } from '@angular/core';
import { NavigationBarComponent } from "../navigation-bar/navigation-bar.component";
import { DropDownNavBarElement } from '../../Models/Default/NavModel/DropDownNavBarElement';
import { LinkNavBarElement } from '../../Models/Default/NavModel/LinkNavBarElement';
import { ParticulesModule } from '../../Particules/particules.module';
import { InputModel, InputTypes } from '../../Models/Particules/Input/InputModel';
import { ToggleNavBarElement } from '../../Models/Default/NavModel/ToggleNavElement';
import { NavBarElement } from '../../Models/Default/NavModel/NavBarElement';
import { SideBarComponent } from "../../Molecules/side-bar/side-bar.component";
import { Observable, Subject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
const subject = new Subject<boolean>()
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavigationBarComponent, ParticulesModule, SideBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  $sidebarCallopse = new Observable<boolean>(x=> x.next(this._sidebarCallopse));
  

  list: NavBarElement[] =[
    // new LinkNavBarElement({
      // link:"a",
      // Name:"a",
    // }),

    // new LinkNavBarElement({
      // link:"b",
      // Name:"b",
    // }),


     new ToggleNavBarElement({
      href:"../../../assets/bell-regular.svg",
      Function: this.sidebarCallopse,
      FunctionName:"test"
    }),

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
   
  ]
  InputModel: InputModel ={
    type:InputTypes.button,
    class :"form-control"

  }
 
  
  _sidebarCallopse:boolean = false;
  sidebarCallopse(){
    //this._sidebarCallopse = !this._sidebarCallopse
    //subject.next(this._sidebarCallopse).
    ////this.$sidebarCallopse = subject
    //
    //
    //console.log( this._sidebarCallopse)
    
    
  }
  
}
