var dictionaryList = (function () {
    function dictionaryList() {
        this.dictionaryTypes = [
            { groupKey: 'sizes', display: 'Rozmiary' },
            { groupKey: 'localizations', display: 'Lokalizacje' },
            { groupKey: 'colors', display: 'Kolory' }
        ];
    }
    ;
    return dictionaryList;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dictionaryList;
