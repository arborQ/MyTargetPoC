import * as React  from 'react';
export default class navigationMenu extends React.Component<any, any>{
  render(){
    return (
      <nav className="navbar navbar-light bg-faded">
        <a id="logo" href="#" className="navbar-brand">
          <span className="md-hide">JustMove</span>
        </a>
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#/products">Produkty</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/bilans//">Bilans</a>
          </li>
        </ul>
      </nav>
    );
  }
}
