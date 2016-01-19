var chainFontSize = function(val){
    var type = $(val).attr("data-change");
    var fnt = parseInt($(".sin-container").css("font-size"));
    if(type === "down"){
        fnt = fnt-1;
        $(".sin-container").css("font-size", fnt+"px")
    }else if( type === "up"){
        fnt = fnt+1;
        $(".sin-container").css("font-size", fnt+"px")
    }
}