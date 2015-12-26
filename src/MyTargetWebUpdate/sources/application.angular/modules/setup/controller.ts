export default class applicationController {
    menuItems : any[];
    constructor(menuOptions : string[], itemDictionary : {}){
      this.menuItems = menuOptions.map((p : string) => { return { name : p, display : (itemDictionary[p] || p) };});
    }
}
