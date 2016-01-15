export default class locationController{
  constructor(private $http : ng.IHttpService){}
  loadLocations(search : string){
    return this.$http.get<string[]>('/api/location').then((items) => {
      return items.data.filter((l) => !search || search.length === 0 || l.indexOf(search) !== -1);
    });
  }
}
