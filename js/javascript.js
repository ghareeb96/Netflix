let questions = $(".question");

questions.click((e) => {
    questions.map((index, item) => {
        $(`#${item.nextElementSibling.id}`).removeClass("show")
    })
    $(`#${e.target.nextElementSibling.id}`).toggleClass("show")
})