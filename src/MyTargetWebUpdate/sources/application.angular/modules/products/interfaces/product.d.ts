declare module arbor.products{
  interface IProduct extends arbor.IEntity{
      Code : string;
      Name : string;
      Color? : string;
      Size? : string;
      NetPrice?: number;
      Tax? : number;
      StoredQuantity : number;
      Supplier : string;
  }
}
