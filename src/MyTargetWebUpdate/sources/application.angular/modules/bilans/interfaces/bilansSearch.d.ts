declare module arbor.bilans{
  interface IBilansFilter{
    FreeText? : string;
    DateFrom? : Date;
    DateTo? : Date;
    Type? : number;
    NetPrice : arbor.products.IRangeCriteria;
    Quantity : arbor.products.IRangeCriteria;
  }
}
