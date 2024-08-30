import { Component, Input } from "@angular/core";
import { imageDisplayComponent } from "../../Particules/image-display/image";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
    selector:"app-link-bar",
    standalone:true,
    styles:`
    a {
        display: flex;
        align-items: center;
    }

    a:hover{
        background-color: #fefefe15
    }

    a:active{
        background-color: #fefefe35
    }

    app-img{
        margin-right: 5px
    }
    
    `,
    template:`
        <li class="nav-item" style="margin: 5px 0px 5px 0px;">
            <a [href]="href" class="nav-link text-white" aria-current="page">
                <div style="opacity: 75%; display:flex">
              <app-img [href]="ImagePath"></app-img>
              {{Text}}</div>
            </a>
        </li>
    `,
    imports:[imageDisplayComponent,RouterOutlet, RouterLink, RouterLinkActive],
})
export class LinkBarElement{
    @Input() ImagePath:string=""
    @Input() Text:string=""
    @Input() href:string=""
}