// window.alert("Isso mesmo");

const href = window.location.href

console.log(href)

if (href === "http://192.168.0.107:5500/aulas03/oqueedom/"){
    console.log("É igual");
}

 const h1Selecionado =document.querySelector('h1');

 const h1Classes = h1Selecionado.classList

 h1Selecionado.addEventListener("click", function(){
     console.log("Clicou em ", h1Selecionado.innerHTML)
 })


//  Exercicio

// Retorne o url da página atual utilizando o objeto window
const url = location.href
// Seleciona o primeiro elemento da página que
// possua a classe ativo

const Ativo1 = document.querySelector(".ativo")

// Retorne a linguagem do navegador
const linguagem = navigator.language
// Retorne a largura da janela

const largura = innerWidth