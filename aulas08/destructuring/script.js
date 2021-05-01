function anunciarGanhadores(premio, ...ganhadores) {
    console.log(ganhadores);
    console.log(arguments);
}
anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');


// const frutas = ["Banana", 'Uva', "Morango"]

// const legumes = ["Cenoura", "Batata"];

// const comidas = [...frutas, "pizza", ...legumes]

// console.log(comidas);

// EXERCICIOS

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = "blue", color ="red") {
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    buttonElement.style.color = color;
    return buttonElement;
}
const redButton = createButton();



// Utilize o método push para inserir as frutas ao final de
// comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comida = ['Pizza', 'Batata'];

comida.push(...frutas)