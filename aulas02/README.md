# JavaScript
curso feito na plataforma da origamid

<h1>Projeto do Curso</h1>
https://origamid.github.io/animais-fantasticos/

<h1 >Resumo</h1>
// VARIAVEIS
var nome = "Leonardo";
let idade = 16;
const possuiFalcudade = false;

// ARRAY
var Frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

// OBJETO
var quadrado = {
    lados: 4,
    area(lado){
        return lado * lado;
    },
    perimetro(lado){
        return lado * this.lados;
    },
}

// OPERADORES
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4


// TERNARIO
var idade = 20;
var podeVotar;
podeVotar = idade>= 18 ? "pode votar" : "não pode votar";

// BOOLEAN
var condicional2 = (5-5) || (5+5) && (10-2);
console.log(condicional2);

//IF/ELSE
if(possuiGraduacao){
    console.log("é verdadeiro!")
} else if(possuiDoutorado){
    console.log('Possui Doutorado')
} else{
    console.log("Não possui nada")
} 

// SWITCH
switch(corFavorita){
    case "Azul":
        console.log('Olhe para o céu');
        break;
    case "Amarelo":
        console.log('Olhe para o sol');
        break;
    case "Verde":
        console.log('Olhe para a floresta');
        break;
    default:
        console.log("Feche os olhos.")
}


// FUNÇÕES
function terceiraIdade(idade) {
    console.log(typeof idade);
    if (typeof idade !== "number") {
        return "Por favor preencha um número"
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}


// ARROW FUNCIOTION

const imgs = document.querySelectorAll('img');

// LOOPS

for( var fruta = 0; fruta < Frutas.length; fruta++){
    console.log(Frutas[fruta])
    if(Frutas[fruta]=== "Pera"){
        break
    }
}

