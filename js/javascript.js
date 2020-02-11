let showList = [false, false, false, false, false];

$("#q1").click(function () {
    if (showList[0] == false) {
        $("#a1").addClass("show");
        $("#a2").removeClass("show");
        $("#a3").removeClass("show");
        $("#a4").removeClass("show");
        $("#a5").removeClass("show");
        showList.fill(false);
        showList[0] = true;
    } else {
        $("#a1").removeClass("show");
        showList[0] = false;
    }
});
$("#q2").click(function () {
    if (showList[1] == false) {
        $("#a2").addClass("show");
        $("#a1").removeClass("show");
        $("#a3").removeClass("show");
        $("#a4").removeClass("show");
        $("#a5").removeClass("show");
        showList.fill(false);
        showList[1] = true;
    } else {
        $("#a2").removeClass("show");
        showList[1] = false;
    }
});
$("#q3").click(function () {
    if (showList[2] == false) {
        $("#a3").addClass("show");
        $("#a2").removeClass("show");
        $("#a1").removeClass("show");
        $("#a4").removeClass("show");
        $("#a5").removeClass("show");
        showList.fill(false);
        showList[2] = true;
    } else {
        $("#a3").removeClass("show");
        showList[2] = false;
    }
});
$("#q4").click(function () {
    if (showList[3] == false) {
        $("#a4").addClass("show");
        $("#a2").removeClass("show");
        $("#a3").removeClass("show");
        $("#a1").removeClass("show");
        $("#a5").removeClass("show");
        showList.fill(false);
        showList[3] = true;
    } else {
        $("#a4").removeClass("show");
        showList[3] = false;
    }
});
$("#q5").click(function () {
    if (showList[4] == false) {
        $("#a5").addClass("show");
        $("#a2").removeClass("show");
        $("#a3").removeClass("show");
        $("#a4").removeClass("show");
        $("#a1").removeClass("show");
        showList.fill(false);
        showList[4] = true;
    } else {
        $("#a5").removeClass("show");
        showList[4] = false;
    }
});