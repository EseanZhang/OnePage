
var onePage={
    fullScream:"",
    viewWidth:"1080",
    viewHeight:"1920",
    minAspectRatio:1.4,
    loop:true,

}

reSizeItem=function(){
    if(innerHeight/innerWidth<onePage.minAspectRatio){
        $(".item").css({
            width:"100vw",
            height:(viewHeight/viewWidth*100)+"vw"
        })
        let scale=innerHeight/$(".item").height();
        $(".item").css({"transform":"scale("+scale+")",
        "transform-origin":"top"});
    }
 }

 window.onresize=function(){
    reSizeItem();
 }