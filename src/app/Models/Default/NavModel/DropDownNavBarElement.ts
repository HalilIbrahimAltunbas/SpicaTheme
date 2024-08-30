import { LinkNavBarElement } from "./LinkNavBarElement";
import { NavBarElement } from "./NavBarElement";

export class DropDownNavBarElement extends NavBarElement {
  options: LinkNavBarElement[]
    constructor(args :{
      Name : string
      options : LinkNavBarElement[]
    }) {
      super({
        _type:"DropDown",
        Name:args.Name,
        
      });
      this.options = args.options

    }
  }