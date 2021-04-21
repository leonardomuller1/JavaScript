setTimeout(() => {
    console.log('teste')
}, 0)
const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);
function handleClick() {
    setTimeout(() => {
        this.classList.add('active')
    }, 1000)
}

//     setTimeout(()=>{
//         console.log(i);
//     },1000*i)
// }

function loop(texto) {
    console.log(texto);
}
// setInterval(loop, 1000, 'Passou 1s');
// loop a cada segundo
// let i = 0;
// const meuLoop= setInterval(() => {
//     console.log(i++);
//     if(i>20){
//         clearInterval(meuLoop)
//     }
// }, 1000);

// EXERCICIOS

// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// function mudarClasse() {
//     document.body.classList.toggle('ativo')
// }
// setInterval(mudarClasse, 12000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
pausar.addEventListener('dblclick', resetarTempo)

let i = 0;
let timer;

function iniciarTempo() {
    timer = setInterval(()=>{
    tempo.innerText = i++;
    },100);
    btn.setAttribute('disabled', '')
}

function pausarTempo() {
    clearInterval(timer)
    btn.removeAttribute('disabled', '')
}

function resetarTempo() {
    tempo.innerHTML = 0;
    i = 0 
}