function imprimirMeuNome(nome) {
    return'\nMeu nome é: ' + nome;
}

function vereficarIdade(idade) {
    if (idade >= 18) {
        console.log(imprimirMeuNome('Gabriel ') + '\nIdade: ' + idade + '\nMaior de Idade!')
    }
    else {
        console.log(imprimirMeuNome('Gabriel ') + '\nIdade: ' + idade + '\nMenor de Idade!')
    }
}

vereficarIdade(20);