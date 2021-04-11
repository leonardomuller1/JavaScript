/*
const h1= document.querySelector('h1');
const animaisLista = document.querySelector(".animais-lista")


h1.innerHTML= "<p>Novo Título</p>"
console.log(h1)

// Transversing

const lista = document.querySelector('.animais-lista');
console.log(lista.parentElement);//pai

console.log(lista.nextElementSibling);//acima

console.log(lista.nextElementSibling);//baixo

console.log(lista.children[--lista.children.length]);//ultimo filho


console.log(lista.querySelector('li:last-child'));

console.log(lista.childNodes)

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato');
const tituloContato = contato.querySelector('.titulo')

const mapa = document.querySelector('.mapa')
// animais.appendChild(tituloContato);

contato.replaceChild(mapa, tituloContato)
contato.insertBefore(animais,mapa);

const novoh1 = document.createElement('h1');
novoh1.innerHTML= "TITULO"
novoh1.classList.add('titlo')

mapa.appendChild(novoh1)
console.log(novoh1)
*/

const h1 = document.querySelector('h1');
const faq= document.querySelector('.faq')

const cloneH1= h1.cloneNode(true);

faq.appendChild(cloneH1)

// EXERCICIOS

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const dt = faq.querySelector('dt')

// Selecione o DD referente ao primeiro DT
const dd = dt.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML