import * as React  from 'react';
import { get } from 'jquery';

import { FlatButton } from 'material-ui';
import productStore from './store/productStore';

export default class productsList extends React.Component<any, { list : arbor.products.IProduct[], search? : string}>{
  constructor(){
    super();
    this.state = { list : [] };

    productStore.subscribe(() => {
      this.setState({ list : productStore.getState() })
    });
    this.setState({ list : productStore.getState() })
  }
  componentDidMount(){
    get('/api/products', (data : arbor.products.IProduct[]) => {
      productStore.dispatch({ type : 'reload', data});
    });
  }

  searchFiler(value : string){
    this.setState({ search : value, list : this.state.list });
  }

  render(){

    var renderItems = this.state.list
    .filter((item) => !this.state.search || `${item.Code} ${item.Name} ${item.Supplier} ${item.Location}`.indexOf(this.state.search) !== -1)
    .map((item) =>  <a key={item.Id} className="list-group-item" href={`#/products/details/${item.Id}`}>{item.Code}</a>);

    return (
      <div>
        <div className="card">
          <div className="card-block">
            <div className="row">
              <div className="col col-lg-12">
                <label htmlFor="search-text" className="control-label">Szukaj</label>
                <input id="search-text" type="text" className="form-control" value={this.state.search} onChange={(event) => { this.searchFiler(event.target["value"]) }} />
              </div>
            </div>
            <div className="row">
              <FlatButton label="Add new" key="add" ref="add" onClick={() => { productStore.dispatch({ type : "add" }); }} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="list-group list-group-flush">
            <span className="list-group-item">Kod</span>
            {renderItems}
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}
