export default class dictionaryList{

  dictionaryTypes : { groupKey : string, display : string}[ ];
  constructor() {
    this.dictionaryTypes= [
      { groupKey : 'sizes', display : 'Rozmiary' },
      { groupKey : 'localizations', display : 'Lokalizacje' },
      { groupKey : 'colors', display : 'Kolory' }
    ];
  };
}
