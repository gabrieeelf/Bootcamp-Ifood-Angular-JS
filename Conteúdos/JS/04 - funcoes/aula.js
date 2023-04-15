function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do Peso';

    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso Normal';

    } else if (imc >= 25 && imc < 30) {
        return 'Acima do Peso';

    } else if (imc >= 30 && imc <= 40) {
        return 'Obeso';

    } else {
        return 'Obesidade Gravíssima';
    }
}

(function () {
    let peso = 60;
    let altura = 1.90;

    const imc = calcularImc(peso, altura)
    console.log('Seu IMC: ' + imc.toFixed(2) + '\nSua classificação: ' + classificarImc(imc));
})();

/*
    Ao utilizar os parenteses na envolta da função, é tratado como prioridade o conteúdo que está nela, sendo 
executado primeiro.
    Ao colocar '();' após o fechamento dos parenteses a função já é chamada, se tornando uma função imediatamente
invocada.

    Essa estrutura é utilizada para funções que não são invocadas repetidamente.
*/