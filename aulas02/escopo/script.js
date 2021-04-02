'use strict'

var carro = 'Fusca';
function mostrarCarro() {
  console.log(carro);
  }
  
  mostrarCarro(); // Fusca no console
  console.log(carro); // Erro, carro is not defined


{
  let mes = "Dezembro";
  console.log(mes);
}

// console.log(mes)

// for(let i = 0; i < 10; i++) {
//   console.log(`Número ${i}`);
//   }
//   console.log(i); // 10

const semana = "sexta"
// semana = "quinta"

console.log(semana);

const data ={
  ano:2021,
  mes: "Abril"
} 

data.dia = 2






// Exercicio

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  // escopo
  console.log(cor, marca, portas);
  }
  

  
  // Como corrigir o erro abaixo?
  const dois = 2;
  function somarDois(x) {
  return x + dois;
  }
  function dividirDois(x) {
  return x / dois;
  }
  console.log(somarDois(4));
  console.log(dividirDois(6));
  
  // O que fazer para total retornar 500?
  const numero = 50;
  
  for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);