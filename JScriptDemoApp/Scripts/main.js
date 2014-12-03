/// <reference path="knockout-3.2.0.js" />
require.config({
    // relative url from where modules will load
    baseUrl: "Scripts/",
    paths: {
        "jquery": "jquery-1.8.2",
        "knockout": "knockout-3.2.0"
    }
});

require(["app/app", "app/mod", "app/appViewModel", "knockout"], function (app, mod, appViewModel, ko) {
    var vm = new appViewModel();
    ko.applyBindings(vm);
    app.init();
    app.add(1, 3);
    mod.doSomething();
    mod.doAnotherThing();
    console.log(vm.firstName());
    console.log(vm.firstNameCaps());
});