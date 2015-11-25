export default class UserList {
    constructor(userService) {
        this.model = userService.query();
    }
    get selectedUser() { return this.model.filter((u) => u.$selected)[0]; }
    get isSelected() { return !!this.selectedUser; }
    select(user) {
        this.model.forEach((item) => {
            if (item !== user) {
                item.$selected = false;
            }
        });
        user.$selected = !user.$selected;
    }
}
