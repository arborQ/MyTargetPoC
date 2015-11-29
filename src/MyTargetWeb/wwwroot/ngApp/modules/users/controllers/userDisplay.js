var userDisplay = (function () {
    function userDisplay(userService) {
        userService.get({ id: 1 });
    }
    return userDisplay;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = userDisplay;
