export default class errorHandler implements ng.IHttpInterceptor{
  constructor(private toaster : ngtoaster.IToasterService){
    console.log(this.toaster);
  }
  responseError(rejection: any)  {
    console.log(this.toaster);
      this.toaster.error("error :)");
  };
}
