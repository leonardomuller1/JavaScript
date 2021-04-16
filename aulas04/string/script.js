// exemplo 1
const comida = 'Pizza';
const agua = new String('Agua');

console.log(comida.length)

const frase = "A melhor comida";
console.log(frase[frase.length - 1])
console.log(frase[frase.charAt[frase.length]])


// exemplo 2
const Frase = "A melhor comida ";
const linguagem = "JavaScript";

const fraseFinal = Frase.concat(linguagem, " !!");

// exemplo 3
const fruta = 'Banana';
const listaFrutas = "Melancia, Banana, Laranja";

console.log(fruta.includes(listaFrutas));
console.log(listaFrutas.includes(fruta));

console.log(fruta.endsWith('na'));
console.log(fruta.indexOf('n'))

// exemplo 4
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, -1))

console.log(linguagem.substring(3, 5))

// exemplo 5
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

//Exemplo 6 
const frase2 = 'Ta';
frase.repeat(5)

//Exemplo 7
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

// Exemplo 8
const htmlText = '<div>O melhor item</div><div>A melhor lista</div > ';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');
console.log(htmlText)
console.log(htmlArray)
console.log(novoHtml)

// Exemplo 9
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toLowerCase() === 'feminino')

// Exemplo 10
const valor = ' R$ 23.00 '

console.log(valor.trim())


// EXERCICIOS
// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Taxa Cliente',
    valor: 'R$ 49',
},
];

let taxaTotal = 0
let recebimentoTotal = 0
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace('R$ ', '')
  if (item.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal += numeroLimpo
  } else if (item.descricao.slice(0, 4) === 'Rece') {
    recebimentoTotal += numeroLimpo
  }

})
console.log(taxaTotal)
console.log(recebimentoTotal)

// Retorne uma array com a lista abaixo

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';')
console.log(arrayTransportes)

// // Substitua todos os span's por a's
let html = `<ul>
              <li><span>Sobre</span></li>
              <li><span>Produtos</span></li>
              <li><span>Contato</span></li>
              </ul>`;

html = html.split('span').join('a');
console.log(html)

// Retorne o último caracter da frase
const frase_ = 'Melhor do ano!';
console.log(frase_.slice(-1))

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', ' TAXA DO PÃO', ' taxa do mercado', 'depísto Bancário', 'TARIFA especial']

let taxasTotal = 0
transacoes2.forEach((item)=>{
  item = item.toLowerCase();
  item = item.trim();
  item = item.slice(0,4);
  if(item ==='taxa'){
    taxasTotal++
  }
})

console.log(taxasTotal)