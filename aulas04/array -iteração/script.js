const Carros_ = ['Ford', 'Fiat', 'Honda'];

Carros_.forEach((item, index, array) => {
    console.log(item.toUpperCase(), index, array)
})

const li = document.querySelectorAll('li');

li.forEach(i => i.classList.add('ativa'));

const carros = ['Ford', 'Fiat', 'Honda'];

const novaArray = carros.map((item, index, array) => {
    return item.toUpperCase();
})

console.log(novaArray)

const numeros = [2, 23, 3, 45, 5, 53, 23]
const numerosX2 = numeros.map(n => n * 2)

console.log(numerosX2)

const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const tempoAulas = aulas.map(aula => aula.min);

const arrayNomeAulas = aulas.map((aula) => {
    return aula.nome;
});
console.log(arrayNomeAulas)
console.log(tempoAulas)

const tempo = [10, 25, 30]

const reduceTempo = tempo.reduce((acumulador, item) => {
    return item + acumulador;
})
console.log(reduceTempo)

const Numeros = [12, 323, 45, 67, 89];

const maiorNumero = Numeros.reduce((anterior, atual) => {
    if (anterior > atual) {
        return anterior
    } else {
        return atual
    }
})
console.log(maiorNumero)
const aulas_ = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]
const listaAulas = aulas_.reduce((acumulador, aula, index) => {
    acumulador[index] = aula.nome;
    return acumulador;
}, {})

const frutas = ['Banana', 'Pêra', 'Uva'];

const temUva = frutas.some((item) => {
    console.log(item)
    return item === "Uva";
})

const every = frutas.every((fruta) => {
    return fruta;
})

const indexUva = frutas.findIndex(item => {
    return item === "Uva";
})
console.log(indexUva)
console.log(every)
console.log(temUva)

const Numeros_ = [6, 43, 22, 88, 101, 29];
const maiorQue3 = Numeros_.every(n => n >= 6);

console.log(maiorQue3)

const numeros1 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros1.filter(x => x > 45);
console.log(buscaMaior45)


// EXERCICIOS
// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso


const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos)

const objetosCursos = arrayCursos.map((curso)=>{
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const aulas = curso.querySelector('.aulas').innerText;
    const horas = curso.querySelector('.horas');
    return{
        titulo,
        descricao,
        aulas,
        horas
    }
})

console.log(objetosCursos)

// Retorne uma lista com os
// números maiores que 100
const numerosExer = [3, 44, 333, 23, 122, 322, 33];

const Maiorque100 = numerosExer.filter(x => x > 100);
console.log(Maiorque100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria',
    'Teclado']

const temBaixo = instrumentos.some((item) => {
    return item === "Baixo"
})

console.log(temBaixo)

// Retorne o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Quejo',
        preco: 'R$ 10,60'
    }
]
const valorTotal = compras.reduce((acumulador,item)=>{
    const precoLimpo = +item.preco.replace("R$","").replace(',','.')
    return acumulador + precoLimpo;
},0)

console.log(valorTotal)