/*
    1 - Crie uma classe para representar carros.
    Os carros possuem:
    Marca, cor e gasto médio de combustível por KM.

    Criar uma método que a partir da quantidade de KM e preço do combustível retorne o valor gastro desse percurso
*/

class Carros {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    gastoCombustivel(distancia, valorCombustivel) {
        return distancia * this.gastoMedio * valorCombustivel;
    }
}

const celta = new Carros('Chevrolet', 'Prata', 1 / 12);
console.log(celta.gastoCombustivel(100, 5.50));

const uno = new Carros('Fiat', 'Vermelho', 1 / 14);
console.log(uno.gastoCombustivel(100, 5.50));