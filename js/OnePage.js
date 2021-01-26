 
var viewWidth=1080;
var viewHeight=1920;

 reSizeItem=function(){
    if(innerWidth>innerHeight){
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