export default class productDetails{
  public sizes = new Array();//<{id : number, name : string}>[ ];
  constructor(){
    this.sizes = [
      { id : 'S', name : "S"},
      { id : 'M', name : "M"},
      { id : 'L', name : "L"},
      { id : 'XL', name : "XL"},
      { id : 'XXL', name : "XXL"},
     ];
  }
}
