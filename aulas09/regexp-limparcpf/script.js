const cpfsLista = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
    return elements.map(element => element.innerText);
}

const limparCPF = (cpf) => {
    return cpf.replace(/\D/g, "");
}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

const formartarCPS = (cpfs) => {
    return cpfs.map(limparCPF).map(construirCPF)
}

const subistituiCPFS = (cpfsElements) => {
    const cpfs = elementsInnerText(cpfsElements)
    const cpfsFormatados = formartarCPS(cpfs)

    cpfsElements.forEach((element, index)=>{
        element.innerText = cpfsFormatados[index]
    })

    console.log(cpfsFormatados)
}

subistituiCPFS(cpfsLista);