export class InputModel{
    class:string
    type:string | InputTypes
    Name:string
    placeholder:string
    constructor(args:{
        class:string
        type:string
        Name:string
        placeholder:string
    }) {
       this.class = args.class
       this.type = args.type
       this.Name = args.Name
       this.placeholder = args.placeholder
    }
}

export enum InputTypes{
"button"="button",
"checkbox"="checkbox",
"color"="color",
"date"="date",
"datetime-local"="datetime-local",
"email"="email",
"file"="file",
"hidden"="hidden",
"image"="image",
"month"="month",
"number"="number",
"password"="password",
"radio"="radio",
"range"="range",
"reset"="reset",
"search"="search",
"submit"="submit",
"tel"="tel",
"text"="text",
"time"="time",
"url"="url",
"week"="week",

}