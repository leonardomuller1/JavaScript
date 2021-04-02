
// areaquadrado
function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(10));


// pi
function pi() {
    return 3.14;
}

console.log(pi())


// imc
function imc(peso, altura) {
    var imc = peso / (altura ** 2)
    return imc
}

console.log(imc(80, 1.8));


// cor
function corFavortia(cor) {
    if (cor === "azul") {
        return "Eu gosto do céu"
    } else if (cor === "verde") {
        return "Eu gosto de mato"
    } else {
        return "Eu não gosto de cor"
    }
}

addEventListener("click", function () { console.log("oi") });


// imc  2
function imc2(peso, altura) {
    var imc2 = peso / (altura ** 2);
    console.log(imc2);
}
imc2(20, 1.8);


// terceira idade

function terceiraIdade(idade) {
    console.log(typeof idade);
    if (typeof idade !== "number") {
        return "Por favor preencha um número"
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}

console.log(terceiraIdade(60))


// paises

var totalPaises = 193;
function faltaVisitar(paisesVisitados) {
    return ` Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(totalPaises)



// dados
var profissao = 'Designer';

function dados() {
var nome = 'André';
var idade = 28;
function outrosDados() {
var endereco = 'Rio de Janeiro';
var idade = 29;
return `${nome}, ${idade}, ${endereco}, ${profissao}`;
}
return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro

