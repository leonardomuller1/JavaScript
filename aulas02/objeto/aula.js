// pessoa
var pessoa = {
    nome : "Leonardo", 
    idade : 16,
}


// quadrado
var quadrado = {
    lados: 4,
    area(lado){
        return lado * lado;
    },
    perimetro(lado){
        return lado * this.lados;
    },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// math
console.log(Math.random());


var menu ={
    width: 800,
    height: 50,
    backgroundColor : "#56E",
    metadeHeight(){
        return this.height/2
    }
}

menu.backgroundColor = "#000";
menu.color = "blue";
menu.esconder = function(){
    console.log("Escondi");
}

var bg= menu.backgroundColor;