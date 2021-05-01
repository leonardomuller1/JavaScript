const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

for(const fruta of frutas){
    console.log(fruta)
}

// for(const a of frase){
//     console.log(a)
// }

const buttons = document.querySelectorAll('button')

for(const btn of buttons){
    btn.style.color = "green"
}

console.log(...buttons)

const btn = document.querySelector('button')
const btnStyles = getComputedStyle(btn)

// for(const style in btnStyles){
//     console.log(`${style}: ${btnStyles[style]}`)
// }


// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const li = document.querySelectorAll('li');

for(const i of li){
    i.classList.add('Teste')
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const w in window){
    console.log(w)
}