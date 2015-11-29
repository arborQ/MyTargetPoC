var UserList = (function () {
    function UserList(userService) {
        this.model = userService.query();
    }
    Object.defineProperty(UserList.prototype, "selectedUser", {
        get: function () { return this.model.filter(function (u) { return u.$selected; })[0]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserList.prototype, "isSelected", {
        get: function () { return !!this.selectedUser; },
        enumerable: true,
        configurable: true
    });
    UserList.prototype.select = function (user) {
        this.model.forEach(function (item) {
            if (item !== user) {
                item.$selected = false;
            }
        });
        user.$selected = !user.$selected;
    };
    return UserList;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserList;
