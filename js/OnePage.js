
var onePage = {
    fullScream: "",
    viewWidth: "1080",
    viewHeight: "1920",
    autoScale: false,
    minAspectRatio: 1.4,
    loop: false,
}
onePage.init=function(){

}


reSizeItem = function () {
    if (autoScale) {
        if (innerHeight / innerWidth < onePage.minAspectRatio) {
            $(".item").css({
                width: "100vw",
                height: (viewHeight / viewWidth * 100) + "vw"
            })
            let scale = innerHeight / $(".item").height();
            $(".item").css({
                "transform": "scale(" + scale + ")",
                "transform-origin": "top"
            });
        }
    }
}

window.onresize = function () {
    reSizeItem();
}