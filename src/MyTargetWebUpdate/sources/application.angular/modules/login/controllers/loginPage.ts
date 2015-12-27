export default class loginPage{
  public model : {};
  constructor(private $http : ng.IHttpService){

  }
  public saveToServer(form : ng.IFormController, model : { Login: string, Password : string}) {
    if(true){
      this.$http.post<{ success : boolean, key? : string }>('/api/login', model).then((result) => {

        console.log(result.data.success);
        if(result.data && result.data.success){
          document.location.reload(true);
        }else{
          console.log('login fail');
        }
      }).catch(() => {
        alert('error');
      });
    }
  }
}
