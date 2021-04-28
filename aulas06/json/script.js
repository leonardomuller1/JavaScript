fetch('./dados.json')
.then(r=> r.json())
.then(j =>{
    j.forEach(element => {
        console.log(element.aula)
    });
})

const configuracoes ={
    player :"Google",
    tempo : 25.5,
    aula: "2.1 JavaScript"
}


localStorage.config = JSON.stringify(configuracoes)


