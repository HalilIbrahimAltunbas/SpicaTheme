import { ChangeDetectionStrategy, Component, EventEmitter, Input } from '@angular/core';
import { NavBarElement } from '../../../Models/Default/NavModel/NavBarElement';
import { buttonStyles } from '../../../Models/Particules/Button/ButtonModel';
import { ParticulesModule } from '../../../Particules/particules.module';
import { DropDownNavBarElement} from '../../../Models/Default/NavModel/DropDownNavBarElement';
import { LinkNavBarElement} from '../../../Models/Default/NavModel/LinkNavBarElement';
import { ToggleNavBarElement} from '../../../Models/Default/NavModel/ToggleNavElement';
import { AsPipe } from '../../../Pipes/asPipe';
import { DropDownComponent } from '../../../Particules/drop-down/drop-down.component';
import { ToggleComponent } from '../../../Particules/Toggle/Toggle';

@Component({
  selector: 'app-nav-bar-part',
  standalone: true,
  imports: [DropDownComponent,AsPipe,ToggleComponent],
  templateUrl: './nav-bar-part.component.html',
  styleUrl: './nav-bar-part.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarPartComponent {
  @Input() ElementList : NavBarElement[] = []
  DropDownNavBarElement!: DropDownNavBarElement;
  LinkNavBarElement!: LinkNavBarElement ;
  ToggleNavBarElement!: ToggleNavBarElement ;
  
  p(element : DropDownNavBarElement): string[]{
    return element.options.map((a:LinkNavBarElement) => {return a.Name})
  }
  buttonstyle = buttonStyles.dark

  //test: EventEmitter<void> = new EventEmitter<void>();
  test1(){
    console.log("olmuştur")
    this.ToggleNavBarElement.Function
  }
}
