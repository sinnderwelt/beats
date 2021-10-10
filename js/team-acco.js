const openItem = item => {
    const container = item.closest(".team_item");
    const contentBlock = container.find(".team_hidden");
    const textBlock = contentBlock.find(".team_hidden-block")
    const reqHeight = textBlock.height();


    container.addClass("active");
    contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
    const items = container.find('.team_hidden');
    const itemContainer = container.find(".team_item");

    itemContainer.removeClass("active");
    items.height(0);
}

$('.people').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest('.team_ul');
    const elemContainer = $this.closest(".team_item");

    if (elemContainer.hasClass("active")) {
        //close
        closeEveryItem(container);
    } else {
        //open
        closeEveryItem(container);
        openItem($this);
    }

    
})