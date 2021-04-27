// const doc = fetch('./doc.txt')

// doc.then(resulucao => {
//     return resulucao.text();
// }).then((body) => {
//     const conteudo = document.querySelector('.conteudo');
//     conteudo.innerText = body
// })



// const cep = fetch('https://viacep.com.br/ws/01001000/json/')

// cep.then(resulucao => {
//     return resulucao.json();
// }).then((body) => {
//     const conteudo = document.querySelector('.conteudo');
//     conteudo.innerText = body.logradouro
// })

// const img = fetch('./img.png')
// img.then(r => r.blob()
// ).then((body) => {
//     const blodUrl = URL.createObjectURL(body)
//     console.log(blodUrl)
//     const imagemDom = document.querySelector('img')
//     imagemDom.src = blodUrl
// })


// EXERCICIOS

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btncep');
const resultadoCep = document.querySelector('.resultadoCep');


btnCep.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep)
}

function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(r => r.text())
        .then(body => {
            resultadoCep.innerText = body
        })
}


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btcDisplay = document.querySelector('.btc')

function fetchBtc() {
    fetch("https://blockchain.info/ticker")
        .then(r => r.json())
        .then(btc => {
            btcDisplay.innerHTML = ("R$ " + btc.BRL.buy).replace('.', ',');
        })
}

// setInterval(fetchBtc, 500);

fetchBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnProxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada');

function puxarPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(piada => {
    paragrafoPiada.innerText = piada.value;
  })
}

btnProxima.addEventListener('click', puxarPiada);