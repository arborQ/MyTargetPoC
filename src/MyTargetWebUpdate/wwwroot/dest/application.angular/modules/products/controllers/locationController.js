var locationController = (function () {
    function locationController($http) {
        this.$http = $http;
    }
    locationController.prototype.loadLocations = function (search) {
        return this.$http.get('/api/location').then(function (items) {
            return items.data.filter(function (l) { return !search || search.length === 0 || l.indexOf(search) !== -1; });
        });
    };
    return locationController;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = locationController;
