const img = document.querySelector('img');

function callback(event) {
    console.log(event)
}

// img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista')
function callbacklista(event) {
    console.log(event.currentTarget)
    console.log(event.target)
    console.log(event.path)
}
animaisLista.addEventListener('click', callbacklista)


const linkExterno = document.querySelector("a[href^='http");

function handleLinkExterno(event) {
    event.preventDefault();
    console.log(event);
    console.log(this);
}

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1')

function handlEvent(event) {
    console.log(event.type, event)
}

// h1.addEventListener('click', handlEvent)
// // h1.addEventListener('mousemove', handlEvent)

// window.addEventListener('scroll',handlEvent)
// window.addEventListener('resize',handlEvent)


function handleKeyboard(event) {
    if (event.key == "f") {
        document.body.classList.toggle('fullscrenn')
    }
}

window.addEventListener('keydown', handleKeyboard)





const imgs = document.querySelectorAll('img');

function handimg(event) {
    console.log(event.currentTarget.getAttribute('src'))
}
imgs.forEach((img) => {
    img.addEventListener('click', handimg)
})


// EXERCICIO

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll("a[href^='#']");

function handlLink(event) {
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo')
    })
    this.classList.add('ativo')
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handlLink);
})

// Selecione todos os elementos do site começando a partir do
// body,
// ao clique mostre exatamente quais elementos estão sendo
// clicados

const todosElementos = document.querySelectorAll("body *");

function handleElemento(event){
    console.log(event.currentTarget)
}

todosElementos.forEach((elemento) =>{
    elemento.addEventListener('click', handleElemento)
})


// Utilizando o código anterior, ao invés de mostrar no
// console,
// remova o elemento que está sendo clicado, o método remove()
// remove um elemento


// function handleElemento(event){
//     event.currentTarget.remove()
// }



// Se o usuário clicar na tecla (t), aumente todo o texto do
// site.


function handleKeyboards(event) {
    if (event.key === "t") {
        document.body.classList.toggle('textomaior')
    }
}

window.addEventListener('keydown', handleKeyboards)