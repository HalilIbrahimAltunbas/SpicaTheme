export class InputModel{
    class:string
    type:string | InputTypes
    
    constructor(args:{
        class:string
        type:string
    }) {
       this.class = args.class
       this.type = args.type
        
    }
}

export enum InputTypes{
    "button",
"checkbox",
"color",
"date",
"datetime-local",
"email",
"file",
"hidden",
"image",
"month",
"number",
"password",
"radio",
"range",
"reset",
"search",
"submit",
"tel",
"text",
"time",
"url",
"week",

}