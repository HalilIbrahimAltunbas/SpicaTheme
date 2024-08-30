export abstract class NavBarElement{
    protected _type : string
    public Name : string
    //public options : NavBarElement[]
    //public link: string
    //public href? : string
    //public FunctionName? : string
  
    public get type() : string {
      return this._type;
    }
  
    constructor(args:{
      Name:string
      _type:string
      //options:NavBarElement[],
      //link:string,
      //
      //href? : string
      //FunctionName? : string
    } ) {
      this._type = args._type
      this.Name = args.Name
      //this.options = args.options
      //this.link = args.link
      //this.href = args.href
      //this.FunctionName = args.FunctionName
    }
  }