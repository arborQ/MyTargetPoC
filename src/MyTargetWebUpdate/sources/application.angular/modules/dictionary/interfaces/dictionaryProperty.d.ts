declare module arbor.dictionary{
  interface IDictionaryProperty extends arbor.IEntity{
      Id : number;
      GroupKey : string;
      PropertyValue : string;
      Description : string;
      Order : number;
  }
}
