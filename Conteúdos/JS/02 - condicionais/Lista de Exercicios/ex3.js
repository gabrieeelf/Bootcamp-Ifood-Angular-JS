/* 
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
adequado.

Códgio Condição de Pagamento:
    1 - À Vista Débito = 10% de Desconto
    2 - À Vista Dinheiro ou Pix = 15% de Desconto
    3 - 2x = Preço Sem Juros
    4 - Acima de Duas Vezes = Preço com 10% de Juros
*/

let valorEtiqueta = 100;
let tipoPagamento = 4;

if (tipoPagamento === 1) {
    valorEtiqueta -= (valorEtiqueta * 0.1);
    console.log('Débito - 10% de Desconto \nO valor da sua compra foi de: ' + valorEtiqueta);

} else if (tipoPagamento === 2){
    valorEtiqueta -= (valorEtiqueta * 0.15)
    console.log('Dinheiro/Pix - 15% de Desconto! \nO valor da sua compra foi de: ' + valorEtiqueta);

} else if (tipoPagamento === 3){
    console.log('2x - Preço da Etiqueta! \nO valor da sua compra foi de: ' + valorEtiqueta);

} else if (tipoPagamento === 4){
    valorEtiqueta += (valorEtiqueta * 0.1)
    console.log('Mais de 2x - 10% de Juros! \nO valor da sua compra foi de: ' + valorEtiqueta);

} else {
    console.log('Opção Inválida');
}