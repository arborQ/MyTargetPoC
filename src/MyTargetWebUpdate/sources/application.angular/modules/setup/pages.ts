import userList from '../users/users.module';
import productsList from '../products/products.module';
import productsBilans from '../bilans/bilans.module';
import dictionaries from '../dictionary/dictionary.module';
import loginPage from '../login/login.module';
export default [
  { name : productsList, display : "Produkty", showNavigation : true  },
  { name : productsBilans, display : "Bilans", showNavigation : true  },
  // { name : loginPage, display : 'Login', showNavigation : true }
  // { name : dictionaries, display : "Ustawienia", showNavigation : true  }
];
