const hamb = document.querySelector('.hamburger');
const wrap = document.querySelector('.wrapper');
const close = document.querySelector('.close-cross');
const menu = document.querySelector('.fullscreen-menu');

hamb.addEventListener('click', function(){
    wrap.style.display='none';
    menu.style.display='flex';
})

close.addEventListener('click', function(){
    wrap.style.display='block';
    menu.style.display='none';
})