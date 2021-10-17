const mesureWidth = item => {
    const screenWidth = $(window).width();
    const container = item.closest(".color-menu");
    const titleBlocks = container.find(".color-menu_title");
    const titleWidth = titleBlocks.width() * titleBlocks.length;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        return screenWidth - titleWidth;
    } else {
        return 500;
    }
};

const closeEveryItem = (container) => {
    const items = container.find(".color-menu_item");
    const content = container.find(".color-menu_content");

    items.removeClass("active");
    content.width(0);
};

const openItem = (item) => {
    const hiddenContent = item.find(".color-menu_content");
    const reqWidth = mesureWidth(item);

    item.addClass("active");
    hiddenContent.width(reqWidth);
};

$(".color-menu_title").on("click", (e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".color-menu_item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".color-menu");

    if (itemOpened) {
        closeEveryItem(container);
    } else {
        closeEveryItem(container);
        openItem(item);
    }
});