const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");

console.log(gridSection);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl= document.querySelector('ul');
console.log(primeiraUl);

const linkInternos = document.querySelector("[href^='#'")
console.log(linkInternos);

const animaisImg = document.querySelectorAll(".animais img");

console.log(animaisImg);

primeiraUl.classList.add('grid-section')

const gridSelectionHTML= document.getElementsByClassName('grid-section');
const gridSelectionNode= document.querySelectorAll('.grid-section');



console.log(gridSelectionHTML);
console.log(gridSelectionNode);

gridSelectionNode.forEach(function(item,index){
    console.log(item)
})


const arrayGrid = Array.from(gridSelectionHTML);

arrayGrid.forEach(function(item){
    console.log(item)
})



// EXERCICIOS

// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img')
console.log(img)

// Retorne no console apenas as imagens que começaram com a palavavra imagem
const imagensanimais = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imagensanimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll("[href^='#']")
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2AnimaisDescricao = document.querySelector('.animais-descricao h2');
console.log(h2AnimaisDescricao);

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');

console.log(ultimoP[ultimoP.length -1])