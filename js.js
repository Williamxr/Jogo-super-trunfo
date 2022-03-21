var carta1 = {
  nome: "Bulbasaur",
  atributos: {
    ataque: 7,
    defesa: 6,
    magia: 8, 
  }
};

var carta2 = {
  nome: "Squirtle",
  atributos: {
    ataque: 6,
    defesa: 8,
    magia: 7, 
  }
};

var carta3 = {
  nome: "Charmander",
  atributos: {
    ataque: 8,
    defesa: 6,
    magia: 7, 
  }
};

var cartas = [carta1, carta2, carta3];
var cartaBot
var cartaJogador

function sortearCarta(){
  var numeroCartaBot = parseInt(Math.random() * 3); //sorteando a carta
  cartaBot = cartas[numeroCartaBot]; //a carta do meu jogador cartaBot será aleatóriamente alguma das 3 cartas(objetos) criadas
  console.log(cartaBot);

  var numeroCartaJogador= parseInt(Math.random() * 3);

  while (numeroCartaBot == numeroCartaJogador){ //condição para que sempre haja um novo sorteio caso as cartas dos jogadores sejam as mesmas
    var numeroCartaJogador= parseInt(Math.random() * 3);
  }

  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
};