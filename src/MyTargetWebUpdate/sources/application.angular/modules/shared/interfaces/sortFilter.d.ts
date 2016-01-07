declare module arbor.sortFilter{
  interface ISortKeyValue {
    key : string;
    name : string;
  }
  interface ISortScope extends ng.IScope{
    options : ISortKeyValue[];
    selectedOption : string[];
    direction : boolean;
  }
}
