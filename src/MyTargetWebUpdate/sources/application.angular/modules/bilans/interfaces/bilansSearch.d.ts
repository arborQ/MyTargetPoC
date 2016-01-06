declare module arbor.bilans{
  interface IBilansFilter{
    Add? : boolean;
    Sell? : boolean;
    Print? : boolean;
  }
  interface IBilansFilter{
    search? : string;
    dateFrom? : Date;
    dateTo? : Date;
    type? : IBilansFilter;
  }
}
