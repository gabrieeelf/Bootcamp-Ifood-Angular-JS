type robot = {
    readonly id: number | string;
    name: string;
}

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot1: robot = {
    id: 1,
    name: "string",
};

const bot2: robot2 = {
    id: 2,
    name: "String",
    sayHello: function (): string {
        return "";
    }
};

console.log(bot1);
console.log(bot2);

class Pessoa implements robot2{
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return `Hello ${this.name}`;
    }
}

const p = new Pessoa(1,"Gabriel");
console.log(p.sayHello());