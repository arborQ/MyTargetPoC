export default class applicationController {
    menuItems : any[];
    itemDictionary : {  };
    constructor(menuOptions : string[]){
      this.itemDictionary = { 'arbor-products-module' : 'Produkty' };
      this.menuItems = menuOptions.map((p : string) => { return { name : p, display : (this.itemDictionary[p] || p) };});
    }
}
