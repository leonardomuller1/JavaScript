// const cliente = {
//     nome: 'Andre',
//     compras: {
//         digitais: {
//             livros: ['Livro 1', 'Livro 2'],
//             videos: ['Video JS', 'Video HTML']
//         },
//         fisicas: {
//             cadernos: ['Caderno 1']
//         }
//     }
// }

// const { digitais,fisicas,digitais:{livros,videos} } = cliente.compras;

// console.log(digitais,fisicas,livros,videos)

const cliente = {
    nome: "Leonardo",
    compras: 14
}

const { nome: Leonardo, email = "email@gmail.com" } = cliente



const frutas = ['Banana', 'Uva', 'Morango'];

const [primeira, segunda, terceira] = frutas;


function haldleKeyBoard({ key }) {
    console.log(key)
}

document.addEventListener('keyup', haldleKeyBoard)


// EXERCICIOS


// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);
const {backgroundColor,color,margin} = btnStyles;

console.log(backgroundColor,color,margin)


// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo,cursoInativo] = [cursoInativo,cursoAtivo]
console.log(cursoAtivo,cursoInativo)


// Corrija o erro abaixo

const cachorro = {
    nome: 'Bob',
    raca: 'Labrador',
    cor: 'Amarelo'
}
const {cor:bobCor} = cachorro;

console.log(bobCor)