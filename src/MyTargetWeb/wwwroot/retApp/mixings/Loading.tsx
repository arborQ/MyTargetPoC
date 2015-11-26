import * as React from "react";

export default (ComposedComponent : any) => class extends React.Component<any, any> {
  constructor() {
    super();
    this.state = { data: null };
  }
  componentDidMount() {
    this.setState({ data: 'Hello' });
  }
  render() {
    return <ComposedComponent {...this.props} data={this.state.data} />;
  }
};
