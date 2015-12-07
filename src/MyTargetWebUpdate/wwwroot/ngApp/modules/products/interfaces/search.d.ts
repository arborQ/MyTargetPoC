declare module arbor.products{
  interface IRangeCriteria{
    MinValue: number;
    MaxValue: number;
  }
  interface ISearchCriteria{
      FreeText : string;
      Color? : string;
      Size? : string[];
      NetPrice?: IRangeCriteria;
      Quantity? : IRangeCriteria;

      $showAdvanceSearch : boolean;
  }
}
