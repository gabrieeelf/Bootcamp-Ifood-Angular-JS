type hero = {
    nome: string,
    vulgo: string,
    telefone: string,
};

function ligarPara(heroi: hero): string{
    return "Ligando para: " + heroi.telefone;
}

ligarPara({
    nome: "Testezin",
    vulgo: "Teste",
    telefone: "19 30102031",
})