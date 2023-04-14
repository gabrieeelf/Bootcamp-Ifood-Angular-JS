let precoGasosa = 5.85;
let precoEtanol = 4.58;
let tipoCombustivel = 'Gasosa';
let distanciaKM = 100;
let kmPorLitros = 10;

const consumoCombustivel = distanciaKM / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = precoEtanol * consumoCombustivel;
    console.log('Quantidade gasta de combustivél: ' + consumoCombustivel.toFixed(2)
        + "\nValor pago: R$" + valorGasto.toFixed(2));

} else {
    const valorGasto = precoGasosa * consumoCombustivel;
    console.log('Quantidade gasta de combustivél: ' + consumoCombustivel.toFixed(2)
        + "\nValor pago: R$" + valorGasto.toFixed(2));
}
