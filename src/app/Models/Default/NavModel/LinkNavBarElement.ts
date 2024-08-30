import {NavBarElement} from "./NavBarElement"

export class LinkNavBarElement extends NavBarElement{
  link:string
    constructor(args :{
      Name : string
      link: string
    }) {
      super({
        Name:args.Name,
        _type:"Link"
      });
      this.link = args.link
    }
  }