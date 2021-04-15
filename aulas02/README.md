# JavaScript
curso feito na plataforma da origamid

<h1>Projeto do Curso</h1>
https://origamid.github.io/animais-fantasticos/

<h1 >Resumo</h1>
<h2> VARIAVEIS </h2>
var nome = "Leonardo";
let idade = 16;
const possuiFalcudade = false;

<h2> ARRAY </h2>
var Frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

<h2> OBJETO </h2>
var quadrado = {
    lados: 4,
    area(lado){
        return lado * lado;
    },
    perimetro(lado){
        return lado * this.lados;
    },
}

<h2> OPERADORES </h2>
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4


<h2> TERNARIO</h2>
var idade = 20;
var podeVotar;
podeVotar = idade>= 18 ? "pode votar" : "não pode votar";

<h2> BOOLEAN</h2>
var condicional2 = (5-5) || (5+5) && (10-2);
console.log(condicional2);

<h2>IF/ELSE</h2>
if(possuiGraduacao){
    console.log("é verdadeiro!")
} else if(possuiDoutorado){
    console.log('Possui Doutorado')
} else{
    console.log("Não possui nada")
} 

<h2> SWITCH</h2>
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


<h2> FUNÇÕES</h2>
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


<h2> ARROW FUNCIOTION</h2>

const imgs = document.querySelectorAll('img');

<h2> LOOPS</h2>

for( var fruta = 0; fruta < Frutas.length; fruta++){
    console.log(Frutas[fruta])
    if(Frutas[fruta]=== "Pera"){
        break
    }
}

