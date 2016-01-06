var arbor_controllers_1 = require('arbor.controllers');
var bilansComment = (function (_super) {
    __extends(bilansComment, _super);
    function bilansComment($http, $stateParams, arborDateFilter) {
        _super.call(this, '/api/stockChangeComment', $http, { id: $stateParams["commentId"] });
        this.arborDateFilter = arborDateFilter;
        this.PageTitle = 'Komentarz';
    }
    bilansComment.prototype.dataLoaded = function (data) {
        console.log(this.arborDateFilter(data.Created));
        this.PageTitle = "Zmiana dla " + data.ProductName + " ( " + this.arborDateFilter(data.Created) + " )";
    };
    return bilansComment;
})(arbor_controllers_1.ModelController);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bilansComment;
