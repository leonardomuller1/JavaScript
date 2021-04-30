export default function initFetchbitcoin() {
    fetch("https://www.blockchain.com/ticker")
    .then(res => res.json())
    .then(bitcoin =>{
        const btc = document.querySelector('.btc-preco')
        btc.innerText = (100/ bitcoin.BRL.sell).toFixed(5)
    }).catch(erro=>{
        console.log(Error(erro))
    })    
}

