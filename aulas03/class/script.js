const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');

if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

menu.className += ' vermelho';

console.log(menu.className);

const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');

const srcImg = img.getAttribute('alt');

img.setAttribute('alt', 'É uma raposa');

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);

console.log(srcImg);

const carro = {
  portas: 4,
  andar: function(km) {
    console.log(`Andou ${km}`);
  }
}

//EXERCICIOS

// Adicione a classe ativo a todos os itens do menu
const itensMenu= document.querySelectorAll('.menu a');
itensMenu.forEach((item)=>{
    item.classList.add('ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas o 
itensMenu.forEach((item)=>{
    item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs= document.querySelectorAll('img');

imgs.forEach((img)=>{
    const possuiATributo= img.hasAttribute('alt');
    console.log(img, possuiATributo)
})

// Modifique o href do link externo no menu
const linkesterno = document.querySelector('a[href^="http"]')
linkesterno.setAttribute('href', 'https://google.com/')
console.log(linkesterno)