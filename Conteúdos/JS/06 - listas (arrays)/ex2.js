/*
    2 - Crie um programa que imprima uma lista de números e diferencie qual número é impar ou par
*/

const numeros = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numeros.length; i++) {
    let verificacao = numeros[i];

    if(verificacao %2 === 0){
        console.log(`${numeros[i]} é par!`);
    }else{
        console.log(`${numeros[i]} é impar!`);
    }

}
