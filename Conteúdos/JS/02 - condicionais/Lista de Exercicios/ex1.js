/*Daça um algoritmo que dado as 3 notas tiradas por uma aluno em um semestre da faculdade calcule e imprima
a sua média e a sua classificação conforme a tabelame abaixo:

Média = (n1 + n2 + n3) / 3;

Classificação:
- Média menor que 5 = Reprovação;
- Média entre 5 e 7 = Recuperação;
- Média maior que 7 = Passou de semestre;
*/

let n1 = 8; n2 = 8; n3 = 8;

const media = (n1 + n2 + n3) / 3;

if (media < 5) {
    console.log('Reprovado!');

} else if (media >= 5 && media <= 7) {
    console.log('Recuperação!');

} else {
    console.log('Parabéns! Passou de semestre.');
}