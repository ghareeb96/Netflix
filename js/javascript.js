let questions = $(".question");

questions.click((e) => {
    if ($(`#${e.target.nextElementSibling.id}`).hasClass("show")) {
        questions.map((index, item) => {
            $(`#${item.nextElementSibling.id}`).removeClass("show")
        })
    } else {
        questions.map((index, item) => {
            $(`#${item.nextElementSibling.id}`).removeClass("show")
        })
        $(`#${e.target.nextElementSibling.id}`).addClass("show")
    }

})