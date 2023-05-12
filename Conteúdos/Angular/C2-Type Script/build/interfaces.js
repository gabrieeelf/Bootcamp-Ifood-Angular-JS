"use strict";
const bot1 = {
    id: 1,
    name: "string",
};
const bot2 = {
    id: 2,
    name: "String",
    sayHello: function () {
        return "";
    }
};
console.log(bot1);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}
const p = new Pessoa(1, "Gabriel");
console.log(p.sayHello());
