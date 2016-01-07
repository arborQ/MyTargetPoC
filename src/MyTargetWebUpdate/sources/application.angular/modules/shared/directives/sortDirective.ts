import { viewTemplateUrl } from '../../../modules/setup/viewHelper';
import controller from '../controllers/sortController';
export default <ng.IDirective>{
  restrict : "E",
  scope : { options : "=", selectedOption : '=', direction : '=' },
  controller,
  controllerAs : 'vm',
  templateUrl : viewTemplateUrl("shared", "_sortView")
};
