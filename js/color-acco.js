const mesureWidth = () => {
    return 500;
}

const openItem = item => {
    const hiddenContent = item.find(".color-menu_content");
    const reqWidth = mesureWidth();

    hiddenContent.width(reqWidth);
}

$(".color-menu_title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".color-menu_item");

    openItem(item);
});