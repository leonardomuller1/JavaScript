// fetch('https://pokeapi.co/api/v2/pokemon/1/')
// .then(r =>r.json())
// .then(pokemon =>{
//     console.log(pokemon)
// })

const url = "https://jsonplaceholder.typicode.com/posts/2";
const options ={
    method: 'PUT',
    body: '{"title": "JavaScript"}',
    Headers:{
        "Content-Type": "application/json; charset=utf-8",
    } 
}

fetch(url,options)
.then(r => r.json())
.then(j => console.log(j))