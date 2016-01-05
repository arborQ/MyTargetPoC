var arbor_controllers_1 = require('arbor.controllers');
var bilansComment = (function (_super) {
    __extends(bilansComment, _super);
    function bilansComment($http, $stateParams) {
        _super.call(this, '/api/stockChangeComment', $http, { id: $stateParams["commentId"] });
        this.PageTitle = 'Komentarz';
    }
    return bilansComment;
})(arbor_controllers_1.ModelController);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bilansComment;
