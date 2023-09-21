//==================== SECTION FLASHING EFFECT CHAPTER ================================

const cards = document.querySelectorAll(".appearing_section")

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show_appearing', entry.isIntersecting)
        })
    },
    {
        threshold: 0.3,
    }
)

cards.forEach(card => {
    observer.observe(card)
})


//======================= RESPONSIVE NAVBAR CHAPTER =======================================

const toggleButton = document.getElementsByClassName('header__toggle_button')[0]
const navbarLinks = document.getElementsByClassName('header__navbar')[0]
const crossBtn = document.getElementsByClassName('header__cross_button')[0]
const burgerBars = document.querySelectorAll('.header__toggle_button__bar')

const header = document.getElementsByClassName('header')[0]

let submenuActive = false
let showMenu = false

toggleButton.addEventListener('click', toggleMenu)

function toggleMenu() {
    navbarLinks.classList.toggle('active')
    crossBtn.classList.toggle('header__cross_button--active')

    for (let elem of burgerBars) {
        elem.classList.toggle('header__toggle_button__bar--unactive')
    }

    showMenu = !showMenu

    closeSubmenu()
}

document.addEventListener('click', function handleClickOutsideBox(event) {
    if (showMenu) {
        if (!header.contains(event.target)) {
            navbarLinks.classList.toggle('active')
            crossBtn.classList.toggle('header__cross_button--active')

            for (let elem of burgerBars) {
                elem.classList.toggle('header__toggle_button__bar--unactive')
            }
            showMenu = false

            closeSubmenu()
        }
    }
})

window.addEventListener("resize", closeSubmenu)

function closeSubmenu () {
    if (smallScreen.matches && document.querySelector('.header__navbar__item__submenu--active')) {
        document.querySelector('.header__navbar__item__submenu--active').classList.add('header__navbar__item__submenu')
        document.querySelector('.header__navbar__item__submenu--active').classList.remove('header__navbar__item__submenu--active')

        document.querySelector('.header__navbar__item__arrow_up').classList.add('header__navbar__item__arrow_down')
        document.querySelector('.header__navbar__item__arrow_up').classList.remove('header__navbar__item__arrow_up')

        document.querySelector('.header__navbar__item--active').classList.remove('header__navbar__item--active')

        submenuActive = false
    }
}



//==================== DROPDOWM MENU FOR SMALL SCREEN MODE =======================================

const dropdownItems = document.querySelectorAll('.header__navbar__item__container--active')

// const x = window.matchMedia("(max-width: 850px)")
const smallScreen = window.matchMedia("(max-width: 850px)")

dropdownItems.forEach( (item) => {
    const nextSibling = item.nextElementSibling;

    item.addEventListener('click', () => {
        if (smallScreen.matches) {
            nextSibling.classList.toggle('header__navbar__item__submenu--active')
            nextSibling.classList.toggle('header__navbar__item__submenu')
            item.closest('a').classList.toggle('header__navbar__item--active')
            item.lastElementChild.classList.toggle('header__navbar__item__arrow_down')
            item.lastElementChild.classList.toggle('header__navbar__item__arrow_up')

            submenuActive = !submenuActive
        }
    })
})



// const res = document.querySelector('.header__navbar__item--services_page')
// const bigScreenItem = `
//         <a class="header__navbar__item header__navbar__item__container" href="./index.html#product-di-agnostics">
//             PRODUCT: DI-AGNOSTICS
//             <svg class="header__navbar__item__arrow_down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg>
//         </a>
//         <div onclick="window.location.href = './product-di-agnostics.html'" class="header__navbar__item__submenu">
//             TO PRODUCT: DI-AGNOSTICS PAGE
//         </div>
// `
// const smallScreenItem = `
//     <a class="header__navbar__item header__navbar__item--dropdown" href="index.html#product-di-agnostics">
//         <div class="header__navbar__item__container header__navbar__item__container--active">
//             PRODUCT: DI-AGNOSTICS
//             <svg class="header__navbar__item__arrow_down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg>
//         </div>

//         <div onclick="window.location.href = './product-di-agnostics.html'" class="header__navbar__item__submenu">
//             TO PRODUCT: DI-AGNOSTICS PAGE
//         </div>
//     </a>
// `





/*
Hi Oleks,

thank you for your time and efforts to update smartificialelements website.

Please, find the following comments:

1. The version from https://dafen173.github.io/a-gnostics-pure-js/index.html couldn't be deployed to production because the header menu is not ready:

- If you have only one element in the drop-down menu, it should not be one item with line starts with TO ...

-- For Service's drop-down it could be solution just go service.html page.

-- For Product(s) it can be only Products in the main menu with dropdowns: DI-AGNOSTICS and CBF.

But it is not production ready as we don't have content for that pages.

The quick solution might be disable drop-downs and stay with ankers.

 2. Please, open https://smartificialelement.com in one tab and https://dafen173.github.io/a-gnostics-pure-js/index.html in other. Click between them.

In my screens your version looks larger than original.

2.1 Compare Services screen. In which version it is easy to read the text? See some recommendations how wide text should be. See how wide text is when you google.

3. Product: Di-agnostic your text and images looks larger than original.

4. Please, compare the rest of the index.html page: fonts, position, spaces between rows, etc.
The minor notes:

5. This website has no relationships (formally) to a-Gnostics or SoftElegance.

- disable URL to social networks at the footer, as Smartificialelement has no SN yet.

6. I have not tested mobile view. Please, do it after the fixes above.
Looking forward to hearing from you

Regards
Andy

*/