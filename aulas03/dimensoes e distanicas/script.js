const listaAnimias = document.querySelector('.animais-lista')

const height = listaAnimias.scrollHeight
const animaisTop = listaAnimias.offsetTop;
console.log(animaisTop)

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;

const h2rect = primeiroh2.getBoundingClientRect();
console.log(h2rect);

if(h2rect.top < 0){
    console.log("PASSOU")
}

console.log(
    window.innerWidth, //largura da pagina
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset, //altura do scrool
);

const small = window.matchMedia('(max-width:600px').matches;

if(small){
    console.log("Usuario mobile")
}else{
    console.log("usuario desktop")
}

// Verifique a distância da primeira imagem
// em relação ao topo da página
const imgPrimeira= document.querySelector('img')
console.log(imgPrimeira.getBoundingClientRect().top)

// Retorne a soma da largura de todas as imagens
function somaImgs(){
    const imgs= document.querySelectorAll('img')
    let soma = 0
    imgs.forEach((img)=>{

        soma += img.offsetWidth
    })    
    console.log(soma)
}


window.onload = function(){
    somaImgs()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link)=>{
    const linkWidth= link.offsetWidth
    const linkHeight= link.offsetHeight
    if( linkWidth >= 48 && linkHeight >=48){
        console.log(link,"possui boa acessibilidade")
    }else{
        console.log(link,"Não possui  boa acessibilidade")
    }
})


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}

