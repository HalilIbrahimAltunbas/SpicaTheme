import { Component, Input } from '@angular/core';

@Component({
    selector: `app-img`,
    styles: `
    .img{
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
    }
    img{
        width: 17px;
    }`,
      template: `
        <div class="img">
            <img [src]="href" alt="" />
        </div>
      `,
      standalone: true,
      imports: [],
})
export class imageDisplayComponent {
    @Input() href : string ="";
}
