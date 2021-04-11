function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    if (tabMenu.length && tabContent.length) {
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
}
initTabNav();


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