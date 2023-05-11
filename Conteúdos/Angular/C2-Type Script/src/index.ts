//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

//objeto - sem previsibilidade
let produto: object = {
    name: "Gabriel",
    cidade: "SP",
    idade: "20",
};

//objeto tipado
type ProdutoLoja = {
    nome: string,
    preco: number,
    unidades: number,
}

//objeto tipado - com previsibilidade
let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 300.25,
    unidades: 2
}
// --------------------------------------------------------------------------------------------------------------- //

//Arrays
let dados: string[] = ["Gabriel", "Ana", "Vanessa"];
let dados2: Array<string> = ["Gabriel", "Ana", "Vanessa"];

//Arrays Multi Types
let infos: (string | number)[] = ["Gabriel", 20];

//Arrays Metodos
dados.map

// --------------------------------------------------------------------------------------------------------------- //

//Tuplas
let boleto: [string, number, number] = ["Conta Agua", 200.50, 4];

// --------------------------------------------------------------------------------------------------------------- //

//Datas
let aniversario: Date = new Date("2023-05-10 21:30");
console.log(aniversario.toString());