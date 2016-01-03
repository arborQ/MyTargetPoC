import pages from './modules/setup/pages';
import applicationConfig from './modules/setup/config';

import baseApplication from './modules/shared/common';

baseApplication({ pages, applicationConfig, itemDictionary :
  {
    'arbor-products-module' : 'Produkty',
    'arbor-bilans-module' : 'Bilans'
} })
