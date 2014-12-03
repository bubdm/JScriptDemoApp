/// <reference path="../require.js" />
define(function () {
    self = this;
    self.func1 = 'doSomething function';
    self.func2 = 'doAnotherThing function';
    var doSomething = function () { console.log(func1)};
    var doAnotherThing = function () { console.log(func2) };

    return {
        doSomething: doSomething,
        doAnotherThing: doAnotherThing
    };


});