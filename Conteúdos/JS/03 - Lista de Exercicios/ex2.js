/* 
    Crie um algoritmo que faça o calculo do IMC - Indice de Massa Corporal

    Fórmula:
        IMC = peso / (altura * altura);

    Condições:
        Abaixo de 18.5 = Abaixo do Peso
        Entre 18.5 e 25 = Peso Normal
        Acima 25 e 30 = Acima do Peso
        Acima 30 e 40 = Obeso
        Acima de 40 - Obesidade Grave
*/

let peso = 60; 
let altura = 1.90;

const imc = peso / Math.pow(altura, 2); /* Math.pow(altura, 2) -> Uma função da classe Math, para colocar um
                                        valor como potência, nesse caso ao quadrado*/

console.log("Seu IMC: " + imc.toFixed(4))

if (imc < 18.5) {
    console.log('Abaixo do Peso');

} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso Normal');

} else if (imc >= 25 && imc < 30) {
    console.log('Acima do Peso');

} else if (imc >= 30 && imc <= 40){
    console.log('Obeso');

} else {
    console.log('Obesidade Gravíssima');
}