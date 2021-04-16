// // const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {
//   cor:
//     'Azul', preco: 2000
// }], function andar(nome) {
//   console.log(nome)
// }];

// const carros = new Array('Ford', "Fiat", 'Honda');

// carros[2] = "Ferrari"
// carros[19]= 'Audi'

// console.log(carros.length)

// const li = document.querySelectorAll('li');

// const arrayLi = Array.from(li)

// const obj = {
//   0: "teste",
//   1: "teste1",
//   2: "teste2",
//   length:3,
// }

// const objArray = Array.from(obj)

// console.log(li)
// console.log(arrayLi)

// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
// console.log(frutas.length)

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// instrumentos.sort()

// const idades = [32,21,33,43,1,12,8];
// idades.sort()

// console.log(instrumentos)
// console.log(idades)

const carros = ['Ford', 'Fiat', 'VW'];

carros.unshift('Kia', "Ferrari")
carros.push('Parati', "Gol")

console.log(carros)

// console.log(carros.pop())        
// shift() começo

// console.log(carros.reverse())

console.log(carros.splice(2, 1, "Fusca"))

console.log(carros)

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6'].copyWithin(2, 0, 2))

console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3))


const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const maisTransportes = [].concat(transporte1, transporte2, 'Van')

console.log(maisTransportes)

const linguagens = ['html', 'css', 'js', 'php', 'python',];

console.log(linguagens.includes('ruby'))
console.log(linguagens.indexOf('php'))


// let htmlString = '<h2>Título Principal</h2>'
// htmlString = htmlString.split('h2');
// htmlString = htmlString.join('h1')

// console.log(htmlString)

console.log(linguagens.slice()) //metodo para clonar

// EXERCICIOS

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array


const primeiraComida = comidas.shift()
const ultimaComida = comidas.pop()
comidas.push("Arroz");
comidas.unshift("Peixe", "Batata")

// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber',
'Julia'];
estudantes.sort();
estudantes.reverse();

console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))


// Substitua section por ul e div com li,
// utilizando split e join

let html = `<section>
<div>Sobre</div>
<div>Produtos</div>
<div>Contato</div>
</section>`

html = html.split('section').join('ul').split('div').join('li')


const carros_exer = ["Ford", "Fiat", "VW", "Honda"]
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const CarrosCopia = carros.slice()
carros.pop()