document.addEventListener('click', function(e) {
    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');
    if(e.target.closest('.menu-btn')) {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    } else if (menu.closest('.active') && !e.target.closest('.menu-row') && menuBtn.closest('.active')) {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
    }


    let block = document.querySelector('.header-end-row')
    if(e.target.closest('.header-end-search-open')) {
        block.classList.add('_open-search')
    }
    if(e.target.closest('.header-end-search-close')) {
        block.classList.remove('_open-search')
    }

    
    let contentBlock = document.querySelector('.header-body-row')
    if(e.target.closest('.header-content-lupa-open')) {
        contentBlock.classList.add('_content-open-search')
    }
    if(e.target.closest('.header-content-lupa-close')) {
        contentBlock.classList.remove('_content-open-search')
    }
})


const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 30) {
        header.classList.add('_scrolled');
    } else {
        header.classList.remove('_scrolled');
    }

    lastScrollTop = scrollTop;
});