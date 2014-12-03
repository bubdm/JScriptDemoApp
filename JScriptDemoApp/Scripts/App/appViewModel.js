/// <reference path="../require.js" />
/// <reference path="../knockout-3.2.0.js" />

define(['knockout'], function (ko) {
    return function appViewModel() {
        this.firstName = ko.observable('Bob');
        this.firstNameCaps = ko.pureComputed(function () {
            return this.firstName().toUpperCase();
        },this);
    };
});