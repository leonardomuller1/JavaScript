async function puxarDados() {
    try{
    const responseDados = await fetch('./dados.json')
    const responseCLientes = await fetch('./clientes.json')
    const jsonDados =  await (await responseDados).json ()
    const jsonClientes =  await (await responseCLientes).json ()
    

    console.log(jsonDados)
    console.log(jsonClientes)
    }catch(erro){
        console.log(erro)
    }
}

puxarDados()