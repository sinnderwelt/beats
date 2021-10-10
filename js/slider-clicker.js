const findBlockByAlias = (alias) => {
    return $(".review_item").filter((ndx, item) => {
        return $(item).attr("data-linked-with") == alias
    });
}
$(".review_clicker").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest(".users");

    itemToShow.addClass("active").siblings().removeClass("active");
    curItem.addClass("active_circkle").siblings().removeClass("active_circkle");

})