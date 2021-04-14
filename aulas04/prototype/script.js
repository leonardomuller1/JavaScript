// function Pessoa(nome, idade){
//     this.nome = nome;
//     this.idade = this.idade
//     this.abracar = function(){
//         return "Abraçou!"
//     }
//     this.andar = function(){
//         return "Andou pelo objeto"
//     }
// }

// Pessoa.prototype.andar = function(){
//     return this.nome +" andou!"
// }
// Pessoa.prototype.nadar = function(){
//     return this.nome +" nandou!"
// }

// const Leonardo = new Pessoa('Leonardo', 16)

// console.log(Pessoa.prototype)

const pais = 'Brasil'
const cidade = new String("Rio")

const listaAnimais = ['Cachorro','Gato','Cavalo']

const lista = document.querySelectorAll('li')

// Transforma em Arry
const listaArray = Array.from(lista)

console.log(listaArray)

// Object.getOwnPropertyNames(Array)


const Carro = {
    marca :"Ford",
    preco :2000,
    andar(){
        return true
    },
}

// Exercicios

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa


function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto= function(){
    return `${this.nome} ${this.sobrenome}`;
}

const Leonardo = new Pessoa('Leonardo','Muller',16);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
li;//HTMLLIElement
li.click;//Function
li.innerText;//String
li.value;//Number
li.hidden;//Boolean
li.offsetLeft;//Number
li.click();//undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;//string