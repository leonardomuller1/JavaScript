// exemplo 1
var numero = 20;
var numero2 = 10;

numero **= numero2;
console.log(numero);



// exemplo 2
var idade = 20;
var podeVotar;
podeVotar = idade>= 18 ? "pode votar" : "não pode votar";

console.log(podeVotar)

var possuiFaculdade = true;
if(possuiFaculdade)
    console.log('Sim possui');
else
    console.log("Não possui");


// EXERCICIOS

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;

console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa)? "Aprovado" : "Negado"
console.log(darCredito)