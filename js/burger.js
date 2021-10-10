const hamb = document.querySelector('.hamburger');
const wrap = document.querySelector('body');
const close = document.querySelector('.close-cross');
const menu = document.querySelector('.fullscreen-menu_container');

hamb.addEventListener('click', function(){
    wrap.classList.add("close");
    menu.classList.add("active");
})

close.addEventListener('click', function(){
    wrap.classList.remove("close");
    menu.classList.remove("active");
})