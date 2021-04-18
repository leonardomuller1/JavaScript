const pessoa = new Object({
  nome: 'Leonardo'
})

const carro = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelar() {
    return this.marca + ' aceleurou';
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(carro).init('honda');

console.log(honda.acelar())

const ferrari = Object.create(carro).init('Ferrari')

console.log(ferrari.buzinar());

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  capacete: true
}


console.log(moto)

Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4 + " Total Rodas"
    }
  }
})

console.log(moto)

const innerHeight = Object.getOwnPropertyDescriptors(window, "innerHeight")
console.log(Object.keys(moto));
console.log(Object.values(moto));
console.log(Object.entries(moto));
console.log(Object.getOwnPropertyNames(moto));

const frutas = ["banana"]
console.log(Object.getPrototypeOf(frutas))
const frutas1 = ["banana"]
const frutanova = frutas1

console.log(Object.is(frutas, frutas1))
console.log(Object.is(frutanova, frutas1))

const carro1 = {
  marca: 'Ford',
  ano: 2018,
}

Object.freeze(carro1)
carro1.marca = "honda"
console.log(carro1)
console.log(Object.isExtensible(carro1))
console.log(Object.isSealed(carro1))

console.log(frutas.hasOwnProperty('map'))

// EXERCICIOS

// Crie uma função que verifique
// corretamente o tipo de dado
function verificador(dado){
  return Object.prototype.toString.call(dado)
}

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {
  lados : {
    value : 4
  }
}

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);

  // Liste o nome de todas
  // as propriedades do
  // protótipo de String e Array

  console.log(Object.getOwnPropertyNames(String.prototype))
  console.log(Object.getOwnPropertyNames(Array.prototype))