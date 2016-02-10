import actions from './productActions';
var indexer = 0;
export default (state : arbor.products.IProduct[] = [], action : { type : string, data : (arbor.products.IProduct | arbor.products.IProduct[]) }) : arbor.products.IProduct[] => {
  switch(action.type){
    case actions.add:
      return [
        <arbor.products.IProduct>{ Id : indexer++,  Name : 'new added ' + indexer, Code : 'NC ' + indexer, StoredQuantity : 1, Supplier  : '', Location  : ''},
        ...state
      ];
    case actions.reload:
      return <arbor.products.IProduct[]>action.data;
  }
  return [];
};
