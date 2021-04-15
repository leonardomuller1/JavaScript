  <style>
        h1{
            color: blue;
            margin: 0 auto;
        }
    </style>

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
var quadrado = { <br>
    lados: 4,<br>
    area(lado){<br>
        return lado * lado;<br>
    },<br>
    perimetro(lado){<br>
        return lado * this.lados;<br>
    },<br>
}

<h2> OPERADORES </h2>
var soma = 100 + 50; // 150<br>
var subtracao = 100 - 50; // 50<br>
var multiplicacao = 100 * 2; // 200<br>
var divisao = 100 / 2; // 50<br>
var expoente = 2 ** 4; // 16<br>
var modulo = 14 % 5; // 4<br>


<h2> TERNARIO</h2>
var idade = 20;<br>
var podeVotar;<br>
podeVotar = idade>= 18 ? "pode votar" : "não pode votar";<br>

<h2> BOOLEAN</h2>
var condicional2 = (5-5) || (5+5) && (10-2);<br>
console.log(condicional2);<br>

<h2>IF/ELSE</h2>
if(possuiGraduacao){<br>
    console.log("é verdadeiro!")<br>
} else if(possuiDoutorado){<br>
    console.log('Possui Doutorado')<br>
} else{<br>
    console.log("Não possui nada")<br>
} <br>

<h2> SWITCH</h2>
switch(corFavorita){<br>
    case "Azul":<br>
        console.log('Olhe para o céu');<br>
        break;<br>
    case "Amarelo":<br>
        console.log('Olhe para o sol');<br>
        break;<br>
    case "Verde":<br>
        console.log('Olhe para a floresta');<br>
        break;<br>
    default:<br>
        console.log("Feche os olhos.")<br>
}<br>


<h2> FUNÇÕES</h2>
function terceiraIdade(idade) {<br>
    console.log(typeof idade);<br>
    if (typeof idade !== "number") {<br>
        return "Por favor preencha um número"<br>
    } else if (idade >= 60) {<br>
        return true;<br>
    } else {<br>
        return false;<br>
    }<br>
}<br>


<h2> ARROW FUNCIOTION</h2>

const imgs = document.querySelectorAll('img');<br>

<h2> LOOPS</h2>

for( var fruta = 0; fruta < Frutas.length; fruta++){<br>
    console.log(Frutas[fruta])<br>
    if(Frutas[fruta]=== "Pera"){<br>
        break<br>
    }<br>
}<br>

