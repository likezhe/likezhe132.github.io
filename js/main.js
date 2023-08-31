$(".blogTop span").click(function () {
    window.location.href = "../index.html"
})
$(".NightPattern").click(function () {
    console.log(123);
    $('html').toggleClass("bg");
    $('.inedx_top').css({
        // "backdrop - filter": "none"
        "background-color": "rgba(0,0,0,0.8)"
    });
    $('footer').toggleClass("ag");
    $('.blogTop').toggleClass("cg");
    $('.inedx_top').toggleClass("cg");
    $('.index_form').toggleClass("ag");

})