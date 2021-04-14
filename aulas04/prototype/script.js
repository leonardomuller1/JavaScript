function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = this.idade
    this.abracar = function(){
        return "Abraçou!"
    }
    this.andar = function(){
        return "Andou pelo objeto"
    }
}

Pessoa.prototype.andar = function(){
    return this.nome +" andou!"
}
Pessoa.prototype.nadar = function(){
    return this.nome +" nandou!"
}

const Leonardo = new Pessoa('Leonardo', 16)

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