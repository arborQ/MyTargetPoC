var pages_1 = require('./modules/setup/pages');
var config_1 = require('./modules/setup/config');
var common_1 = require('./modules/shared/common');
common_1.default({ pages: pages_1.default, applicationConfig: config_1.default, itemDictionary: {
        'arbor-products-module': 'Produkty',
        'arbor-bilans-module': 'Bilans',
        'arbor-dictionary-module': 'Ustawienia'
    } });
