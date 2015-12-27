var loginPage = (function () {
    function loginPage($http) {
        this.$http = $http;
    }
    loginPage.prototype.saveToServer = function (form, model) {
        if (true) {
            this.$http.post('/api/login', model).then(function (result) {
                console.log(result.data.success);
                if (result.data && result.data.success) {
                    document.location.reload(true);
                }
                else {
                    console.log('login fail');
                }
            }).catch(function () {
                alert('error');
            });
        }
    };
    return loginPage;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loginPage;
