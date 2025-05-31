

import {  Type } from "@angular/core"
import { NavBarElement } from "./NavBarElement"
import { BaseComponent } from "../../../Particules/component-toggle/ComponentToggleInterface/ToggleComponentBase"

export class ComponentToggleNavBarElement extends NavBarElement{
  href : string
  componentType: Type<BaseComponent>
    constructor(args :{
      href : string
      componentType: Type<BaseComponent>
    }) {
      super({
        Name:"",
        _type:"ComponentToggle",
      });
      this.href = args.href
      this.componentType = args.componentType
    }
  }