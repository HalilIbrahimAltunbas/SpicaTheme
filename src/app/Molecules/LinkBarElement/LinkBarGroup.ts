import { Component, Input } from '@angular/core';
import { LinkBarElement } from './LinkBarElement';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-link-bar-group',
  standalone: true,
  styles: `
    a {
        display: flex;
        align-items: center;
    }

    a:hover{
        background-color: #fefefe15
    }

    app-img{
        margin-right: 5px
    }

    @media screen and (max-width: 800px){
      .spc-header{
        display:none
      }
    }
    
    `,
  template: `
    <div id="spc-group" style="margin-top: 30px">
      <div class="spc-header" style="margin-left: 20px;">
        <div style="font-size: small;
    font-weight: bold;
    color: mediumpurple;">
          <span style="font-size: small;">{{ group.Header | uppercase }}</span>
        </div>
        <div style="font-size: small;">
          <span
            style="font-size: small ;margin-bottom: 15px; color: rgba(200, 200, 226, 0.75);"
            >{{ group.Description }}</span
          >
        </div>
      </div>

      
        @for (element of group.elements; track $index) {
        <app-link-bar 
          [href]="element.href"
          [Text]="element.Text"
          [ImagePath]="element.ImagePath"
        ></app-link-bar>
        }
    </div>
  `,
  imports: [LinkBarElement, UpperCasePipe],
})
export class LinkBarGroupComponent {
  @Input() group: {
    Header: string;
    Description: string;
    elements: { ImagePath: string; Text: string; href: string }[];
  } = {
    Header: '',
    Description: '',
    elements: [{ ImagePath: '', Text: '', href: '' }],
  };
}
