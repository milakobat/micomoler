$ = jQuery;
//as user scrolls
	//Start moving the element proportionally to how fast
	//the user is scrolling
/*var lastY;
window.onscroll = function() {
	scrolled(window.scrollY);
};*/


//when user hits a certain distance down the screen
/*function scrolled(y){
	$("#header").css({
		"margin-top":(y - 0) * 1.5,
		
	});
}*/

//Start moving the element proportionally to how fast
	//the user is scrolling

	/*$(window).bind('scroll', function(){
			var puntero = $(this).scrollTop();
				
				if(puntero < 600 ) {
					$("#header").css({"margin-top": '200px'});
				} 
					
				if(puntero > 601 ) {
					$("#header").css({"margin-top": '10px'});

				} 
			
			});*/

	$(window).bind('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop(

    	);

    	if (scrolled < 150){
    		$('#header').css('top',(200-scrolled/2)+'px');
    	}
    	if (scrolled > 151){
    		$('#header').css('top',(scrolled-20)+'px');
    	}

    
}

