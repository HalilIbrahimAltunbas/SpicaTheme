import { ChangeDetectionStrategy, Component, EventEmitter, Input } from '@angular/core';
import { imageDisplayComponent } from '../../Particules/image-display/image';
import { LinkBarElement } from '../LinkBarElement/LinkBarElement';
import { LinkBarGroupComponent } from '../LinkBarElement/LinkBarGroup';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [imageDisplayComponent, LinkBarElement, LinkBarGroupComponent,AsyncPipe],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SideBarComponent {
  @Input() open_close = new Observable<boolean>(x=> x.next(true));
  
   
   

  ff(){
    this.open_close.subscribe(
      x => console.log(x)
    )
    
  }

  groups: {
    Header: string;
    Description: string;
    elements: { ImagePath: string; Text: string; href: string }[];
  }[] = [
    {
      Header: 'Dashboard',
      Description: 'description of Dashboard',
      elements: [
        {
          ImagePath: '../../../assets/house.svg',
          Text: 'Home',
          href: 'dashboard',
        },
        
      ],
    },
    {
      Header: 'Components',
      Description: 'description of Components',
      elements: [
        {
          ImagePath: '../../../assets/clipboard-regular.svg',
          Text: 'Projects',
          href: 'dashboard',
        },
        {
          ImagePath: '../../../assets/chart-line-solid.svg',
          Text: 'Analytic',
          href: 'dashboard',
        },
        {
          ImagePath: '../../../assets/wallet-solid.svg',
          Text: 'Finance',
          href: 'dashboard',
        },
      ],
    },
  ];
  
  
}
