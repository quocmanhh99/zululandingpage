const menuToggle = document.querySelector('.menu-toggle');
const headerMenu = document.querySelector('.header__menu');

if (menuToggle && headerMenu) {
    menuToggle.addEventListener('click', function (e) {
        headerMenu.classList.add('is-active');
    })
    document.addEventListener('click', function (e) {
        if (!(headerMenu.contains(e.target)) && !(e.target.matches('.menu-toggle'))) {
            headerMenu.classList.remove('is-active');
        } else if (e.target.matches('.header__menu')) {
            headerMenu.classList.remove('is-active');
        }
    })
}

const switchLightdark = document.querySelector('#switch__lightdark')
switchLightdark.addEventListener('change', function (e) {
    document.body.classList.toggle('dark')
})

const backtop = document.querySelector('.backtop');
const faSoild = backtop.querySelector('.fa-solid')
const html = document.documentElement;


// <i class="fa-solid fa-arrow-down"></i>

document.addEventListener('scroll',function(e){
    const scrollTop = window.pageYOffset;
    const htmlHeight = document.documentElement.offsetHeight;
    if(scrollTop >= (htmlHeight / 2)){
        faSoild.className = 'fa-solid fa-arrow-up backtop__arrow';
    }
    if(faSoild.classList.contains('fa-arrow-down')){
        backtop.addEventListener('click', function (e) {
            setTimeout(() => {
                html.scrollTop = htmlHeight
                faSoild.className = 'fa-solid fa-arrow-up backtop__arrow';
            }, 1000);
        })
    }else{
        backtop.addEventListener('click', function (e) {
            setTimeout(() => {
                html.scrollTop = 0;
                faSoild.className = 'fa-solid fa-arrow-down backtop__arrow';
            }, 1000);
        })
    }
})  

