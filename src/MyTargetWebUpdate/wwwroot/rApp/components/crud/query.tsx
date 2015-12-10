import * as React from 'react';
import { get } from 'jquery';

export default class queryCrud extends React.Component<{ apiUrl : string, children? : any[], onDataLoaded : (data : any[]) => void }, { isLoaded : boolean }>{
  constructor(){
    super();
    this.state = { isLoaded : false }
  }
  componentWillMount(){
    this.setState({ isLoaded : false });
    get(this.props.apiUrl, (data) => {
      console.log(data);
      this.props.onDataLoaded(data);
      this.setState({ isLoaded : true });
    });
  }
  render(){
    return this.state.isLoaded ? <div>{this.props.children}</div> : <div className="loading_placeholder"><div className="loading embeded"></div></div>;
  }
}
