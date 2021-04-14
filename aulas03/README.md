// SELETORES

const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");

console.log(gridSection);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl= document.querySelectorAll('ul');
console.log(primeiraUl);

// CLASS
const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');

if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

// FOREACH

imgs.forEach((item)=> {
    console.log(item);
});

// DIMENSÕES E DISTANCIAS
console.log(
    window.innerWidth, //largura da pagina
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset, //altura do scrool
);

// EVENTO
function handleKeyboards(event) {
    if (event.key === "t") {
        document.body.classList.toggle('textomaior')
    }
}

window.addEventListener('keydown', handleKeyboards)

//TRANVESERSING
const lista = document.querySelector('.animais-lista');
console.log(lista.parentElement);//pai

console.log(lista.nextElementSibling);//acima

console.log(lista.nextElementSibling);//baixo

console.log(lista.children[--lista.children.length]);//ultimo filho
console.log(lista.querySelector('li:last-child'));

console.log(lista.childNodes)

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato');
const tituloContato = contato.querySelector('.titulo')


//NAVEGAÇÃO POR TABS
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
if(tabMenu.length && tabContent.length){
tabContent[0].classList.add('ativo')

function activeTab(index) {
    tabContent.forEach((section) => {
        section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
}

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        });
    });

}

//ACCORDION LISTA
function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const ativo = 'ativo'
    if (accordionList.length) {

        accordionList[0].classList.add(ativo)
        accordionList[0].nextElementSibling.classList.add(ativo)
        function activeAccordion() {
            this.classList.toggle(ativo)
            this.nextElementSibling.classList.toggle(ativo)
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }
}
initAccordion()

//SCROLL SUAVA
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
function initScrollSuave() {


    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        const topo = section.offsetTop
        section.scrollIntoView({
            behavior: 'smooth',
            block: "start",
        })

        // forma alternativa
        /*window.scrollTo({
            top : topo,
            behavior : 'smooth'
        });*/
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
}
initScrollSuave();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible) {
                    section.classList.add('ativo')
                }
            })
        }
        animaScroll()
        window.addEventListener('scroll', animaScroll)
    }
}
initAnimacaoScroll()