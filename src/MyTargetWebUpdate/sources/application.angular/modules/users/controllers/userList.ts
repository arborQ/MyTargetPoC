export default class UserList{
  model : ng.resource.IResourceArray<arbor.users.IUser>;
  get selectedUser() : arbor.users.IUser { return this.model.filter((u) => u.$selected)[0]; }
  get isSelected() : boolean  { return !!this.selectedUser; }

  select(user : arbor.users.IUser){
    this.model.forEach((item : arbor.ui.ISelectable) => {
      if(item !== user){
        item.$selected = false;
      }
    })
    user.$selected = !user.$selected;
  }

  constructor(userService : ng.resource.IResourceClass<arbor.users.IUser>){
    this.model = userService.query();
  }
}
