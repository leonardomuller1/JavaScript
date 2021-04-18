
// function descricaoCarro(velocidade){
//   console.log(this)
//   console.log(this.marca + ' ' + this.ano + " " + velocidade)
// }
// descricaoCarro.call({marca : "Honda", ano : 2019},100)

const carros = ['Ford', 'Fiat', 'VW'];
carros.forEach.call(carros, (item) => {
  console.log(item)
})

function Dom(seletor) {
  this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function (classe) {
  console.log(this)
  // this.element.class,st.add(classe)
}

const li = {
  element: document.querySelector('li')
}
Dom.prototype.ativo.call(li, 'ativar')

// const ul = new Dom('ul')


// ul.ativo.call(li,'ativo')
// ul.ativo('ativar')

const frutas = ['Uva', 'Maçã', 'Banana'];



Array.prototype.pop.call(frutas)
frutas.pop()


// const li_ = document.querySelectorAll('li');
// const filtro = Array.prototype.filter.call(li_, function (item) {
//   return item.classList.contains('ativo');
// });
// console.log(filtro);


const li_ = document.querySelectorAll('li');
const filtro = Array.prototype.filter.bind(li_, function (item) {
  return item.classList.contains('ativo');
});
console.log(filtro());


const numeros = [1232.323, 34, 5445, 343, 432, 33, 433, 21, 43,]

const $ = document.querySelectorAll.bind(document)

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}
const honda = {
  marca :'Honda'
}
const acelerarHonda= carro.acelerar.bind(honda)
console.log(acelerarHonda(300,21))


// EXERCICIO
// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const p = $('p')
const totalCaracteres = Array.prototype.reduce.call(p, (acumulador,item)=>{
  return acumulador + item.innerText.length
},0)
console.log(totalCaracteres)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe,conteudo){
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : ""
  conteudo ? elemento.innerHTML = conteudo : ""
  return elemento
}

console.log(criarElemento('ul','tes', 'teste' ))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará
//dinâmico

const h1Titulo = criarElemento.bind(null,'h1', 'titulo');



console.log(h1Titulo('Cursos de Javascript'))