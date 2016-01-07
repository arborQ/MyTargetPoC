var sortController = (function () {
    function sortController($scope) {
        this.$scope = $scope;
        if (typeof $scope.direction === 'undefined') {
            $scope.direction = true;
        }
        if (typeof $scope.selectedOption === 'undefined') {
            $scope.selectedOption = [];
            this.selectOption($scope.options[0]);
        }
        this.$showOptions = false;
    }
    sortController.prototype.selectOption = function (option) {
        this.$scope.selectedOption = [option.key];
    };
    sortController.prototype.isOptionSelected = function (option) {
        return this.$scope.selectedOption.indexOf(option.key) !== -1;
    };
    return sortController;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sortController;
