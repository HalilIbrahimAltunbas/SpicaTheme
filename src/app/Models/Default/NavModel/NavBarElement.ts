export abstract class NavBarElement{
    protected _type : string
    public Name : string
  
    public get type() : string {
      return this._type;
    }
  
    constructor(args:{
      Name:string
      _type:string
      
    } ) {
      this._type = args._type
      this.Name = args.Name
    }
  }