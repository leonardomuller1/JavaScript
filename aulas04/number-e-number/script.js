console.log(Number.isNaN('ds'));
console.log(Number.isInteger(10.302));

console.log(parseFloat('302.200'))
console.log(parseFloat('100.28 reais'))
console.log(parseInt('100.32 reais'))
console.log(parseInt('12.32'))

const preco = 10.203;
console.log(preco.toFixed());

let valor = 48.49;
valor = valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})

console.log(valor)
console.log(Math.PI)
console.log(Math.abs(-5.5))
console.log(Math.round(12.8))
console.log(Math.max(3,33,2,2,1,123,32,323,2112))
console.log(Math.min(3,33,2,2,1,123,32,323,2112))
console.log(Math.random()*100)


// EXERCICIOS
// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050)

// Retorne o maior número da lista abaixo

const numeros = '4, 5, 20, 8, 9';

const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros);
console.log(numeroMaximo)

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
'R$ 230 ', 'r$ 200'];

function limparPreco(preco){
  preco = +preco.toUpperCase().replace('R$ ', "").trim().replace(',','.');
  preco= +preco.toFixed(2);
  return preco;
}
let soma = 0
listaPrecos.forEach((preco)=>{
  soma += limparPreco(preco);
})

console.log(soma.toLocaleString('pt-Br', {style:'currency', currency: "BRL" }))
limparPreco(listaPrecos[1])