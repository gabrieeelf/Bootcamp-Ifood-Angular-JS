/*
    1 - Imprima a tabuada a partir de um número
*/

const num = 5;

for (let i = 0; i <= 10; i++) {
    let tabuada = 1;
    tabuada = num * i;
    console.log(`${num} x ${i} = ${tabuada}`);
}