import userList from '../users/users.module';
import productsList from '../products/products.module';
import productsBilans from '../bilans/bilans.module';

export default [
  // { name : userList, showNavigation : true  },
  { name : productsList, display : "Produkty", showNavigation : true  },
  { name : productsBilans, display : "Bilans", showNavigation : true  }
];
