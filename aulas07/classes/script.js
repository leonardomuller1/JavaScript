class Button{
    constructor(text,backgroud,color){
        this.backgroud = backgroud;
        this.text = text;
        this.color = color;
    }
    element(){
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.backgroud;
        buttonElement.style.color = this.color;
        return buttonElement
    }
    appendTo(target){
        const targetElement = document.querySelector(target)
        targetElement.appendChild(this.element())
        return targetElement
    }
    static blueButton(text){
        return new Button('text', 'blue','white')
    }
}

const botaoAzul = Button.blueButton('Comprar')


// class Button{
//     constructor(options){
//         this.options = options
//     }
//     static createButton(text,backgroud){
//         const buttonElement = document.createElement('button');
//         buttonElement.innerText = text;
//         buttonElement.style.background = backgroud;
//         return buttonElement
//     }
// }
// const options={
//     backgroudColor: "red",
//     color: "#222",
//     text: "Comprar",
// }
// const blueButton = new Button()

// const RedBlue = Button.createButton('Clique',"#2E0")