/// <reference path="../require.js" />
/// <reference path="../knockout-2.2.0.js" />

define(["knockout"], function (ko) {
    var demoVM = function () {
        var self = this;
        self.values = ko.observable("boby");
        self.apiUrl = "http://localhost:54247/api/values/";
        self.Count = ko.observable();

        self.getValues = function () {
            $.get(self.apiUrl).done(function (data) {
                // self.values(data);
            });
        };

        //return {
        //    getValues: getValues,
        //    values: values,
        //    name: 'revealed'
        //};
    };
    return demoVM;
});

