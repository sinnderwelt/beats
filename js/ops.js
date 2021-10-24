const sections = $("section");
const display = $(".maincontent");
let inScroll = false;

sections.first().addClass("active");

const performTransition = sectionEq => {

    if (inScroll) return;
    inScroll = true;

    if (sectionEq != -1) {
        const position = sectionEq * -100;

        const currentSection = sections.eq(sectionEq);
            const menuTheme = currentSection.attr("data-sidemenu-theme");
            const sideMenu = $(".fixed-menu_link");
            const point = $(".point");


            if (menuTheme == "white") {
                sideMenu.addClass("fixed-menu-shadowed");
            } else {
                sideMenu.removeClass("fixed-menu-shadowed");
            }

        display.css({
            transform: `translateY(${position}%)`
        });

        sections.removeClass("active");
        $(sections[sectionEq]).addClass("active");

        setTimeout(() => {
            inScroll = false;

            point.find(".fixed-menu_item").eq(sectionEq).addClass("fixed-menu_active").siblings().removeClass("fixed-menu_active");

        }, 2000);
    }
}

const scrollViewport = direction => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();


    if (direction == "next") {
        performTransition(nextSection.index())
    }

    if (direction == "prev") {
        performTransition(prevSection.index())
    }
}

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        // next
        scrollViewport("next");
    }

    if (deltaY < 0) {
        //prev
        scrollViewport("prev");

    }
});

$(window).on("keydown", e => {
    
    const tagName = e.target.tagName.toLowerCase();

    if(tagName != "input" && tagName != "textarea") {
        switch (e.keyCode) {
            case 38: //prev
    
            scrollViewport("prev");
            break;
    
            case 40: //next
    
            scrollViewport("next");
            break;
        }
    }   
});

$( document ).ready(function() {
    console.log( "ready!" );

});

$("[data-scroll-to]").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target =$this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);
    
    performTransition(reqSection.index());
});