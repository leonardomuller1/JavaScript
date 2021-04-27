const promesa = new Promise((resolve, reject) => {
    let condicao = true
    if (condicao) {
        setTimeout(() => {
            resolve({nome: 'Leonardo', idade: 16})
        }, 1000)
    } else {
        reject(Error)
    }
});

const retorno = promesa
.then(resulacao => {
    console.log(resulacao)
    resulacao.profissao= "Estudante"
    return resulacao
})
.then(resulacao => {
    console.log(resulacao)
},rejeitada =>{
    console.log(rejeitada)
}).finally(()=>{
    console.log("ACABOU")
})
console.log(retorno)



const login = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Usuario Logado')
    },1000)
})

const dados = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Dados Carregados')
    },1500)
})

const carregouTudo = Promise.all([login,dados])

carregouTudo.then((res)=>{
    console.log(res)
})