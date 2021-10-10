const validateFields = (form, fieldArray) => {

    fieldArray.forEach(field => {
        field.removeClass("input-error");
        if(field.val().trim() == "") {
            field.addClass("input-error");
        }
    });

    const errorFields = form.find(".input-error");

    return errorFields.length == 0;
}

$('.delivery-form').submit((e) => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const street = form.find("[name='street']");
    const home = form.find("[name='home']");
    const corpus = form.find("[name='corpus']");
    const apartment = form.find("[name='apartment']");
    const flat = form.find("[name='flat']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const modal = $("#modal");
    const content = modal.find(".modal_content");

    modal.removeClass("error-modal");

    const isValid = validateFields(form, [name, phone, street, home, corpus, apartment, flat, comment, to]);

    if (isValid) {
        const request = $.ajax({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "post",
            data: {
                name: name.val(),
                phone: phone.val(),
                street: street.val(),
                home: home.val(),
                corpus: corpus.val(),
                apartment: apartment.val(),
                flat: flat.val(),
                comment: comment.val(),
                to: to.val()
            },
        });

        request.done((data) => {
            content.text(data.message);
        });


        request.fail(data => {
                const message = data.responseJSON.message;
                content.text(message);
                modal.addClass("error-modal");    
        })

        request.always(() => {
                $.fancybox.open({
                src: "#modal",
                type: "inline"
            })
        })
    }
    
});

$(".app-close-modal").click(e => {
    e.preventDefault();

    $.fancybox.close();
})