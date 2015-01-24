;define(["components/utils"], function (Utils) {
    var mainModule;

    return mainModule = {
        init: function () {
            console.log("Hola Mundo");
            Utils.sayHello("Felix Mercado");
            return mainModule;
        }
    };
});