import { Component, Input } from "@angular/core";


@Component({
    selector:"app-label",
    standalone:true,
    template:`
        <label>{{text}}</label>
    `,
    styles:
    `.label{
        margin-left:5px; 
        display: flex;
        align-items: center;
    }`,
    imports:[]
})
export class LabelComnponent{
    @Input() text: string =""
}