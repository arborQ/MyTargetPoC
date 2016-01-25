var errorHandler = (function () {
    function errorHandler(toaster) {
        this.toaster = toaster;
        console.log(this.toaster);
    }
    errorHandler.prototype.responseError = function (rejection) {
        console.log(this.toaster);
        this.toaster.error("error :)");
    };
    ;
    return errorHandler;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandler;
