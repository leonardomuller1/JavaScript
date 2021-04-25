export default function initAnimaNumeors() {
    function animaNumeros() {
        const numeros = document.querySelectorAll('[data-numero]')

        numeros.forEach((numero) => {
            const total = +numero.innerText;
            const incremento = Math.floor(total / 100)

            let start = 0;
            const timer = setInterval(() => {
                start = start + incremento;
                numero.innerText = start
                if (start > total) {
                    numero.innerText = total;
                    clearInterval(timer)
                }
            }, 25 * Math.random())
        })
    }


    function handleMutacion(mutation) {
        if (mutation[0].target.classList.contains('ativo')) {
            observer.disconnect();
            animaNumeros();
        }
    }


    const observeTarget = document.querySelector('.numeros')
    const observer = new MutationObserver(handleMutacion)

    observer.observe(observeTarget, { attributes: true })
}

