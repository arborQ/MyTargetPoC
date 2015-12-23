var jquery_1 = require('jquery');
var q_1 = require('q');
var "arbor.service";
(function (arbor.service) {
    var ResourceService = (function () {
        function ResourceService(sourceUrl) {
            this.sourceUrl = sourceUrl;
        }
        ResourceService.prototype.query = function (data) {
            var d = q_1.defer();
            jquery_1.get(this.sourceUrl, data || {})
                .done(d.resolve)
                .fail(d.reject);
            return d.promise;
        };
        ResourceService.prototype.get = function (id) {
            var d = q_1.defer();
            jquery_1.get(this.sourceUrl, { id: id })
                .done(d.resolve)
                .fail(d.reject);
            return d.promise;
        };
        return ResourceService;
    })();
    exports.default = ResourceService;
})("arbor.service" || ("arbor.service" = {}));
