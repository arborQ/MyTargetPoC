var React = require('react');
var jquery_1 = require('jquery');
var queryCrud = (function (_super) {
    __extends(queryCrud, _super);
    function queryCrud() {
        _super.call(this);
        this.state = { isLoaded: false };
    }
    queryCrud.prototype.componentWillMount = function () {
        var _this = this;
        this.setState({ isLoaded: false });
        jquery_1.get(this.props.apiUrl, function (data) {
            console.log(data);
            _this.props.onDataLoaded(data);
            _this.setState({ isLoaded: true });
        });
    };
    queryCrud.prototype.render = function () {
        return this.state.isLoaded ? React.createElement("div", null, this.props.children) : React.createElement("div", {"className": "loading_placeholder"}, React.createElement("div", {"className": "loading embeded"}));
    };
    return queryCrud;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = queryCrud;
