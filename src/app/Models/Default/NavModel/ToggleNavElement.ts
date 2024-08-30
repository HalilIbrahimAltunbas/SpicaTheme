import { EventEmitter } from "@angular/core"
import {NavBarElement} from "./NavBarElement"

export class ToggleNavBarElement extends NavBarElement{
  href : string
  FunctionName : string
  Function: Function
    constructor(args :{
      href : string
      FunctionName : string
      Function: Function 
    }) {
      super({
        Name:"",
        _type:"Toggle",
      });
      this.FunctionName= args.FunctionName
      this.Function = args.Function
      this.href = args.href
    }
  }