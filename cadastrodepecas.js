var Listadepecas = ["peca1","peca2","peca3","peca4","peca5","peca6","peca7","peca8","peca9","peca10","peca11",];
console.log("quantidade de pecas");
//A de linha de cima é uma informação apenas

if (Listadepecas.length > 10){
  console.log("capacidade insuficiente");
}
else{
    console.log("as pecas podem ser cadastradas");
}

console.log("quantidade de caracteres");

for (var contador = 0; contador < Listadepecas.length;contador++){
    pecaAtual = Listadepecas[contador];

    if (pecaAtual.length < 3){
        console.log(pecaAtual + ": a peca posui nome inferior a 3 caracteres e nao pode ser cadastrado")

    }
else{
    console.log(pecaAtual + ": a peca pode ser casdastrada")
}    
}
console.log ("peso da peca");

var pesodapecaemgrama = 50;

if (pesodapecaemgrama < 100){
    console.log("peso insuficiente");
}
    else{
        console.log("peso suficiente")
    }
