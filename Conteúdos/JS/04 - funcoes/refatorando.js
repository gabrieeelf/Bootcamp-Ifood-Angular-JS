let valorEtiqueta = 100;
let tipoPagamento = 4;

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

(function () {
    if (tipoPagamento === 1) {
        console.log('\nDesconto de 10% \nO valor da sua compra foi de: R$' + aplicarDesconto(valorEtiqueta, 10));

    } else if (tipoPagamento === 2) {
        console.log('\nDesconto de 15% \nO valor da sua compra foi de: R$' + aplicarDesconto(valorEtiqueta, 15));

    } else if (tipoPagamento === 3) {
        console.log('\n2x - Preço da Etiqueta! \nO valor da sua compra foi de: ' + valorEtiqueta);

    } else if (tipoPagamento === 4) {
        console.log('\nMais de 2x - 10% de Juros! \nO valor da sua compra foi de: ' + aplicarJuros(valorEtiqueta, 10));

    } else {
        console.log('\nOpção Inválida');
    }
})()