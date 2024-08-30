import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: `app-toggle`,
  styles: `
  .dropdown-img{
    transition: transform .1s !important ;
    border-radius: 30px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
}
img{
    width: 17px;
}

.dropdown-img:hover{
  background-color: rgb(225, 225, 225);
  transform: scale(1.2)
}
  `,
  template: `
    <div class="dropdown-img" (click)="void">
      <img [src]="href" alt="" />
    </div>
  `,
  imports: [],
  standalone: true,
})
export class ToggleComponent {
    @Input() href:string = ""
    @Input() void! : void 
    @Output() $eventClick: EventEmitter<void> = new EventEmitter();
}
