// Crie uma função para verificar se um valor é Truthy
function verificador(valor){
    return !!valor;
}
// Crie uma função matemática que retorne o perímetro de um quadr
// lembrando: perímetro é a soma dos quatro lados do quadrado
    function perimetro(lado){
        return `${lado*4}`
    }
    console.log(perimetro(10))
    
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

    function nomeCompleto(nome,sobrenome){
        return `${nome} ${sobrenome}`
    }
    console.log(nomeCompleto("Leonardo", "Muller"));

// Crie uma função que verifica se um número é par
    function par(numero){
        var test = numero % 2
        if(test ==+ 0){
            return "par"
        }else {
            return "impar"
        }
    }
    console.log(par(2))


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

    function typeofmodel(arg){
        return `${typeof arg}`
    }

    console.log(typeofmodel(1))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'click' ocorrer.
    addEventListener('click',function(){
        console.log("Leonardo Muller")
    } )
// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {

    return `Ainda faltam ${totalPaises - paisesVisitados} países`}

    function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises}`
    precisoVisitar(20);
    jaVisitei(20);}
