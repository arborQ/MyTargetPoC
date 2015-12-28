export default class bilansCreate implements arbor.ui.IDialogPage {
  PageTitle : string;
  model : { AddProducts : boolean, Quantity : number }
  constructor(){
    this.model = { AddProducts : true, Quantity : 1 };
    this.PageTitle = 'Dodaj bilans';
  }
}