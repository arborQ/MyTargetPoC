export default class userDisplay{
  constructor(userService : ng.resource.IResourceClass<arbor.users.IUser>){
    userService.get({ id : 1 })
  }
}
