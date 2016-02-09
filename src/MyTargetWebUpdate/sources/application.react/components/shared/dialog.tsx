import * as React  from 'react';
export default class dialogModal extends React.Component<{ PageTitle : string, children? : any }, any>{
  render(){
    return (
      <div className="modal-open">
      	<div className="modal-backdrop fade in"></div>
      	<div style={ { display : "block" } } className="modal fade in">
      		<div role="document" className="modal-dialog">
      			<div className="modal-content"><div className="modal-header">
      				<h4 className="modal-title">
      					<span>{this.props.PageTitle}</span>
      				</h4>
      				</div>
      				<div className="modal-body">{this.props.children}</div>
      				<div className="modal-footer"></div>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}
