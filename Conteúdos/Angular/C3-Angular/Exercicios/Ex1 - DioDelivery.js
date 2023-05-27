//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Aqui cria-se o objeto pedido com as informações do cliente, endereço, itens do pedido e taxa:
const pedido = {
    cliente: gets(),
    endereco: gets(),
    itens: [],
    taxaEntrega: 5.0
  };
  
  // Para popular o array de itens, criamos a seguinte estrutura de repetição:
  const quantidadeItens = parseInt(gets());
  while (pedido.itens.length < quantidadeItens) {
    const nomeItem = gets();
    const precoItem = parseFloat(gets());
    pedido.itens.push({ nome: nomeItem, preco: precoItem });
  }
  
  let totalCalculado = 0.0;
  for (let item of pedido.itens) {
    totalCalculado += item.preco;
  }
  
  totalCalculado += pedido.taxaEntrega;
  
  const mensagemSaida = `Pedido: ${pedido.cliente}\nEndereco de entrega: ${
    pedido.endereco
  }\nTotal: R$ ${totalCalculado.toFixed(2)}`;
  
  print(mensagemSaida);