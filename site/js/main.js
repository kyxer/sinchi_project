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





$( document ).ready(function() {
	var owlteam = $('.owlTeam');
	owlteam.owlCarousel({
		items:4 ,
		nav:true,
		loop:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				center:true,
			},
			768:{
				items:3,
				margin:15
			}
		},
		autoplay:true, autoplayTimeout:4000, autoplayHoverPause:true
	});
});