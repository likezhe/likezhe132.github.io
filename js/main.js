$(".blogTop span").click(function () {
    window.location.href = "../index.html"
})
$(".NightPattern").click(function () {
    console.log(123);
    $('html').toggleClass("bg");
    $('footer').toggleClass("ag");
    $('.blogTop').toggleClass("cg");
    $('.inedx_top').toggleClass("cg");
    $('.index_form').toggleClass("ag");
})