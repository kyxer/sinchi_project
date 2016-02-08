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

    if ($(window).width() > 767){
        $('.dropdown').hover(function(){
             $(this).addClass('open');
            }, function(){
                $(this).removeClass('open');
            });

        $('.dropdown').click(function(e){
            e.stopPropagation();
        });
    }






	var owlteam = $('.owlTeam');
	owlteam.owlCarousel({
		items:4 ,

		loop:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				center:true,
				nav:false,
			},
			768:{
				items:3,
				nav:true,
				margin:15
			}
		},
		autoplay:false, autoplayTimeout:4000, autoplayHoverPause:true
	});

	var $scrollbar = $(".scrollbar1");
	$scrollbar.tinyscrollbar();


    $('#dp3').datepicker();
});