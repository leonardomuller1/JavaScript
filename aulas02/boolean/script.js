// Exercicio


// Verifique se a sua idade é maior do que a de algum parente 
var idade1 = 39
var idade2 = 15

// Dependendo do resultado coloque no console 'É maior', 'É igual
if(idade1 > idade2) {
    var maior = idade1 -idade2
    console.log(`A sua idade é maior por ${maior} anos`)
}else if(idade1 == idade2) {
    console.log(`As idades são iguais`);

}else{
    var menos =idade2 - idade1;
    console.log(`A sua idade é menor por ${menos} anos`)
}
   
    


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// Irá sair 3, pois é o ultimo resultado, já que não tem nenhum false
console.log(expressao);


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade,!!possuiDoutorado,!!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhão)
var brasil = 207;
var china = 1340;

if(brasil>china){
    console.log("Brasil tem mais habitantes")
}else{
    console.log("Brasil tem menos habitantes")
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
console.log('Verdadeiro');
} else {
console.log('Falso');
}

//  falso, pois a primeira comparação é falsa, pois o G é diferente de g

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
console.log('Gato' && 'Cão');
} else {
console.log('Falso');
}

// Cão, pois é o ultimo verdadeiro