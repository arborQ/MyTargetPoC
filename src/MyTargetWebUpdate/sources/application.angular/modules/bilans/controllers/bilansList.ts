export default class bilansList {
  model : Array<arbor.products.IProduct>
  
  constructor(private $http : ng.IHttpService){
    this.model = [];
    $http.get<Array<arbor.products.IProduct>>('/api/stockChange').then((data) => {
      this.model = data.data;
    });
    
  }
}