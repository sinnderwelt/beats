const slider = $('.buying_list').bxSlider({
    pager: false,
    controls: false
});

$('.arrows_prev').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
})

$('.arrows_next').click(e => {
    e.preventDefault();
    slider.goToNextSlide();
})