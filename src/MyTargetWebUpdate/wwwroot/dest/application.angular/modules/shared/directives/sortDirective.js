var viewHelper_1 = require('../../../modules/setup/viewHelper');
var sortController_1 = require('../controllers/sortController');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    restrict: "E",
    scope: { options: "=", selectedOption: '=', direction: '=' },
    controller: sortController_1.default,
    controllerAs: 'vm',
    templateUrl: viewHelper_1.viewTemplateUrl("shared", "_sortView")
};
