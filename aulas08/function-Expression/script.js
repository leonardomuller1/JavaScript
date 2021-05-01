const somar = (a,b)=> a+ b;

console.log(somar(2,2))


// EXERCICIOS

// Remova o erro

const priceNumber = n => +n.replace('R$', '').replace(',',
'.');
priceNumber('R$ 99,99');

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(function(){
    const teste = "teste"
    console.log(teste)
})()

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();
active(function(){
    console.log('FUNCIONOU')
})

