// const imgs = document.querySelectorAll('img');


// imgs.forEach(function (item, index, array) {
//     // console.log(item, index,array)
// })

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);


titulosArray.forEach(function (item) {
    // console.log(item);
});

// ARROW FUNCIOTION

const imgs = document.querySelectorAll('img');


imgs.forEach((item)=> {
    console.log(item);
});

// EXERCIOS

// Mostre no console cada parágrado do site
const paragrafo= document.querySelectorAll("p")

paragrafo.forEach((item)=>{
    console.log(item);
}
);

// Mostre o texto dos parágrafos no console
paragrafo.forEach((item)=>{
    console.log(item.innerText);
}
);

// Como corrigir os erros abaixo:

const imgs1 = document.querySelectorAll('img');
imgs1.forEach((item, index) => {
console.log(item, index);
});

let i = 0;
imgs1.forEach(() => {
console.log(i++);
});
imgs1.forEach(() => i++);