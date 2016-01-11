declare module arbor.bilans{
  interface IBilansFilter{
    FreeText? : string;
    dateFrom? : Date;
    dateTo? : Date;
    Type? : number;
    NetPrice? : arbor.products.IRangeCriteria;
    Quantity? : arbor.products.IRangeCriteria;
  }
}
