var products_module_1 = require('../products/products.module');
var bilans_module_1 = require('../bilans/bilans.module');
var login_module_1 = require('../login/login.module');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    { name: products_module_1.default, display: "Produkty", showNavigation: true },
    { name: bilans_module_1.default, display: "Bilans", showNavigation: true },
    { name: login_module_1.default, display: "Login", showNavigation: true }
];
