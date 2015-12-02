declare module arbor.users{
  interface IUser extends arbor.IEntity, arbor.ui.ISelectable{
    Login : string;
    IsActive : boolean;
  }
}
