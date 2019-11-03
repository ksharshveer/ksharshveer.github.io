$(document).ready(function () {
    $("#menu-icon").click(function (e) {
        $("#mobile-menu").css("display", "block");
    });
    $("#menu-close-icon").click(function (e) {
        $("#mobile-menu").css("display", "none");
    })
    $("#mobile-menu a").click(function (e) {
        $("#mobile-menu").css("display", "none");
    })
});;
