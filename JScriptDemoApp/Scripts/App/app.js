define(["underscore"], function (_) {
    var App = function () { };

    _.extend(App.prototype, {
        init: function () {
            console.log("Init...");
        }
    });
    _.extend(App.prototype, {
        add: function (a, b) {
            console.log(a + b);
        }
    });

    return new App();
});