var videoGames = ["Switch", "PS5", "Xbox","3DS"];

// var ultimoItem = videoGames.pop();

// videoGames.push("3DS");

for(var i= 0; i< videoGames.length; i++){
    console.log(videoGames[i]);
    if(videoGames[i]==="PS5"){
        break;
    }
}


// loop

// for (var numero = 1; numero <= 10; numero++) {
//     console.log(numero)
// }


var frutas = ["banana","pera","maçã","abacaxi","uva"];

frutas.forEach(function(fruta,index){
    frutas.pop();
    console.log(fruta, index,frutas);
});


// EXERCICIOS

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${a

for(var n=0; n < brasilCampeao.length; n++){
    console.log(`O Brasil ganhou a copa de ${brasilCampeao[n]}`)

}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Per
var Frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for( var fruta = 0; fruta < Frutas.length; fruta++){
    console.log(Frutas[fruta])
    if(Frutas[fruta]=== "Pera"){
        break
    }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = Frutas[Frutas.length - 1];