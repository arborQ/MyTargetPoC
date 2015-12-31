import { ModelController } from 'arbor.controllers';
export default class bilansList extends ModelController<Array<arbor.products.IProduct>> {
  constructor(private $http : ng.IHttpService){
    super('/api/stockChange', $http);
  }
}
