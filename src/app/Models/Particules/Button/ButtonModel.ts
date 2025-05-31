export class ButtonModel{
    class : string
    type : string | buttonStyles | undefined
    text : string
    style?: string
    disabled:boolean =false
    icon?:string 
    
    constructor(args: {
        class : string
        type : string
        text : string
        style?: string
        disabled:boolean
        icon?:string 
    }) {
        this.class =args.class
        this.text =args.text
        this.type =args.type
        this.style = args.style
        this.disabled= args.disabled
        this.icon =args.icon
    }
}

export enum buttonStyles{
    "primary"="btn btn-primary",
    "secondary"="btn btn-secondary",
    "success"="btn btn-success",
    "danger"="btn btn-danger",
    "warning"="btn btn-warning",
    "info"="btn btn-info",
    "light"="btn btn-light",
    "dark"="btn btn-dark",
    "link"="btn btn-link",
    "primary_outline"="btn btn-outline-primary",
    "secondary_outline"="btn btn-outline-secondary",
    "success_outline"="btn btn-outline-success",
    "danger_outline"="btn btn-outline-danger",
    "warning_outline"="btn btn-outline-warning",
    "info_outline"="btn btn-outline-info",
    "light_outline"="btn btn-outline-light",
    "dark_outline"="btn btn-outline-dark",
    "link_outline"="btn btn-outline-link",
} 