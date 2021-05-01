// function createButton(text){

//     function element(){
//         const buttonElement = document.createElement('button');
//         buttonElement.innerText = text
//         return buttonElement
//     }
//     return Object.freeze({
//         text,
//         element
//     });
// }
// const btnComprar= createButton("Comprar")
// const btnVender = createButton("Vender")



// function Pessoa(nome) {
//     if (!(this instanceof Pessoa))
//         return new Pessoa(nome)
//     this.nome = nome;
// }
// Pessoa.prototype.andar = function () {
//     return `${this.nome} andou`;
// }
// const designer = Pessoa('André');

// console.log(designer)

function $$(seletedElements) {
    const elements = document.querySelectorAll(seletedElements)

    function hide() {
        elements.forEach(element => {
            element.style.display = "none"
        });
        return this;
    }

    function show() {
        elements.forEach(element => {
            element.style.display = "initial"
        });
        return this;
    }

    function on(onEvent, callback) {
        elements.forEach(element => {
            element.addEventListener(onEvent, callback)
        })
        return this;
    }

    function add(className) {
        elements.forEach(element => {
            element.classList.add(className)
        })
        return this;
    }

    function remove(className) {
        elements.forEach(element => {
            element.classList.remove(className)
        })
        return this;
    }
    return {
        elements,
        hide,
        show,
        on,
        add,
        remove
    }
}

const btns = $$('button')

console.log(btns.show())

function handleClick(event) {
    console.log(event.target)
    btns.add('active')

}

btns.on('click', handleClick)
