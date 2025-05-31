import {
  Component,
  ComponentFactory,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  Output,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { ProfileComponent } from '../../Molecules/Collapse/profile/profile.component';
import { BaseComponent } from './ComponentToggleInterface/ToggleComponentBase';

@Component({
  selector: 'app-component-toggle',
  standalone: true,
  imports: [],
  templateUrl: './component-toggle.component.html',
  styleUrl: './component-toggle.component.scss',
})
export class ComponentToggleComponent  {
  @ViewChild('vc', { read: ViewContainerRef }) vc!: ViewContainerRef;
  @Input() href: string = '';
  @Input() component!: Type<BaseComponent>;
  open: boolean = false;
  ref: ViewRef | undefined;
  test(event: MouseEvent) {
    this.vc.insert(this.ref!, 0);
    this.open = true; //!this.open
    console.log(typeof(this.component))
  }

  private elementRef = inject(ElementRef);
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.open) {
      return;
    }
    console.log(this.vc.length);

    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.vc.detach(0);
      this.open = false;
    }
  }

  ngAfterViewInit() {
    this.vc.createComponent(this.component);
    this.ref = this.vc.detach(0)!;
  }
}
