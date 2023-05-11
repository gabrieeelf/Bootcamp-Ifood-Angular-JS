"use strict";
//tipos abrangentes: any, void
let retorno;
let retornoView = false;
//objeto - sem previsibilidade
let produto = {
    name: "Gabriel",
    cidade: "SP",
    idade: "20",
};
//objeto tipado - com previsibilidade
let meuProduto = {
    nome: "Tênis",
    preco: 300.25,
    unidades: 2
};
// --------------------------------------------------------------------------------------------------------------- //
//Arrays
let dados = ["Gabriel", "Ana", "Vanessa"];
let dados2 = ["Gabriel", "Ana", "Vanessa"];
//Arrays Multi Types
let infos = ["Gabriel", 20];
//Arrays Metodos
dados.map;
// --------------------------------------------------------------------------------------------------------------- //
//Tuplas
let boleto = ["Conta Agua", 200.50, 4];
// --------------------------------------------------------------------------------------------------------------- //
//Datas
let aniversario = new Date("2023-05-10 21:30");
console.log(aniversario.toString());
